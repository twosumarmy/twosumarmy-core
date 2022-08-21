import datetime
from typing import Optional

from pydantic import BaseModel

from app.enums import TransactionCategory, TransactionType


class Balance(BaseModel):
    value: float
    currency: str


class Transaction(BaseModel):
    id: Optional[int]
    value_date: datetime.date

    amount: float
    purpose: str
    currency: str

    transaction_type: str

    origin_iban: str

    receiver_name: str
    receiver_iban: str
    receiver_swift_code: str

    category: TransactionCategory
    type: TransactionType

    balance: float

    class Config:
        orm_mode = True


class TransactionByCategory(BaseModel):
    amount: float
    category: TransactionCategory

    class Config:
        orm_mode = True


class TransactionByType(BaseModel):
    amount: float
    type: TransactionType

    class Config:
        orm_mode = True
