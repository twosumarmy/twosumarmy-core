from typing import List

from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.crud import transaction as transaction_crud
from app.dependencies import get_db
from app.schemas import Transaction

router = APIRouter()


@router.get("", response_model=List[Transaction])
async def get_transactions(db: Session = Depends(get_db)) -> List[Transaction]:
    return transaction_crud.get_transactions(db)
