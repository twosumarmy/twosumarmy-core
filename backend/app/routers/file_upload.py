import codecs
import csv
import datetime

import pandas as pd
from fastapi import APIRouter, UploadFile, Depends, HTTPException
from sqlalchemy.orm import Session

from app.crud import transaction as transaction_crud
from app.dependencies import get_db
from app.schemas.transaction import Transaction

router = APIRouter()


def to_df(file):
    data = file.file
    data = csv.reader(codecs.iterdecode(data, 'utf-8'), delimiter='\t')
    header = data.__next__()
    print(header)
    df = pd.DataFrame(data, columns=header)
    return df


@router.post("/sparkasse")
async def create_upload_sparkasse_transactions(file: UploadFile, db: Session = Depends(get_db)):
    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail="Only supports .csv files")

    df = pd.read_csv(file.file, delimiter=";")

    for _, row in df.iterrows():
        transaction = Transaction(
            date=datetime.datetime.strptime(row["Day of entry"], "%d.%m.%y"),
            description=row["Purpose"],
            amount=float(row["Amount"].replace(",", ".")),
            currency=row["Currency"],
        )
        successful = transaction_crud.create_transaction(db, transaction)
        print(successful)
    return {"filename": file.filename}
