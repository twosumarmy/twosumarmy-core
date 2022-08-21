from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.crud import transaction as transaction_crud
from app.dependencies import get_db
from app.schemas import Balance

router = APIRouter()


@router.get("", response_model=Balance)
async def get_balance(db: Session = Depends(get_db)):
    return transaction_crud.get_balance(db=db)
