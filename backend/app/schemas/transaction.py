import datetime

from pydantic import BaseModel


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

    class Config:
        orm_mode = True
