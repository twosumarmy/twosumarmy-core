import codecs
import csv
import datetime

import pandas as pd
from fastapi import APIRouter, UploadFile, Depends, HTTPException
from sqlalchemy.orm import Session

from app.crud import transaction as transaction_crud
from app.dependencies import get_db
from app.schemas import Transaction, TransactionCategory
from app.tagger import tagger

router = APIRouter()


def to_df(file):
    data = file.file
    data = csv.reader(codecs.iterdecode(data, 'utf-8'), delimiter='\t')
    header = data.__next__()
    df = pd.DataFrame(data, columns=header)
    return df


@router.post("/sparkasse")
async def create_upload_sparkasse_transactions(file: UploadFile, db: Session = Depends(get_db), ):
    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail="Only supports .csv files")

    df = pd.read_csv(file.file, delimiter=";", encoding='latin-1')

    for _, row in df.iterrows():
        amount = float(row["Betrag"].replace(".", "").replace(",", "."))
        company_name = row["Beguenstigter/Zahlungspflichtiger"]
        if amount < 0:  # noqa
            category = tagger.get_category_by_company_name(company_name=company_name)
        else:
            category = TransactionCategory.SALARY

        transaction = Transaction(
            value_date=datetime.datetime.strptime(row["Buchungstag"], "%d.%m.%y"),
            purpose=row["Verwendungszweck"],
            amount=amount,
            currency=row["Waehrung"],
            origin_iban=row["Auftragskonto"],
            transaction_type=row["Buchungstext"],
            receiver_name=company_name,
            receiver_iban=row["Kontonummer/IBAN"],
            receiver_swift_code=row["BIC (SWIFT-Code)"],
            category=category,
        )

        transaction_crud.create_transaction(db, transaction)
    return {"filename": file.filename}
