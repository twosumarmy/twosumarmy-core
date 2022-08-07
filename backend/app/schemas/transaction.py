import datetime

from pydantic import BaseModel


class Transaction(BaseModel):
    date: datetime.date
    amount: float
    description: str
    currency: str

    class Config:
        orm_mode = True
