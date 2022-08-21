import datetime

from pydantic import BaseModel

from app.enums import TransactionCategory, TransactionFlow


class Balance(BaseModel):
    value: float
    currency: str


class TransactionCreate(BaseModel):
    value_date: datetime.date

    amount: float
    purpose: str
    currency: str

    type: str

    origin_iban: str

    receiver_name: str
    receiver_iban: str
    receiver_swift_code: str

    category: TransactionCategory
    flow: TransactionFlow

    balance: float


class Transaction(TransactionCreate):
    id: int

    class Config:
        orm_mode = True


class TransactionByCategory(BaseModel):
    amount: float
    category: TransactionCategory

    class Config:
        orm_mode = True


class TransactionByType(BaseModel):
    amount: float
    flow: TransactionFlow

    class Config:
        orm_mode = True
