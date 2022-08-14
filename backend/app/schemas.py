import datetime

from pydantic import BaseModel

from app.enums import TransactionCategory


class Transaction(BaseModel):
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

    class Config:
        orm_mode = True
        use_enum_values = True
