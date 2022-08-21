from sqlalchemy import Float, Column, Integer, String, Date, Enum

from app.database import Base
from app.enums import TransactionCategory, TransactionFlow


class TransactionORM(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    value_date = Column(Date)
    amount = Column(Float)
    purpose = Column(String, default="")
    currency = Column(String)

    origin_iban = Column(String)

    receiver_name = Column(String)
    receiver_iban = Column(String)
    receiver_swift_code = Column(String)

    type = Column(String)
    category = Column(Enum(TransactionCategory))

    balance = Column(Float)
    flow = Column(Enum(TransactionFlow))
