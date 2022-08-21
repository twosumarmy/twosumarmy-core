import datetime
from typing import List

from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.crud import transaction as transaction_crud
from app.dependencies import get_db
from app.schemas import Transaction, TransactionByCategory, TransactionByType

router = APIRouter()


@router.get("", response_model=List[Transaction])
async def get_transactions(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return transaction_crud.get_transactions(db=db, skip=skip, limit=limit)


@router.get("/{transaction_id}", response_model=Transaction)
async def get_transaction(transaction_id: int, db: Session = Depends(get_db)):
    return transaction_crud.get_transaction_by_id(transaction_id=transaction_id, db=db)


@router.get("/group_by/category", response_model=List[TransactionByCategory])
async def get_transaction_group_by_category(start_date: datetime.date, db: Session = Depends(get_db)):
    return transaction_crud.get_transaction_group_by_category(db=db)


@router.get("/group_by/flow", response_model=List[TransactionByType])
async def get_transaction_group_by_flow(start_date: datetime.date, db: Session = Depends(get_db)):
    return transaction_crud.get_transaction_group_by_flow(db=db)
