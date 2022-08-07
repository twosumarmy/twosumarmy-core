from sqlalchemy import Float, Column, Integer, String, Date

from app.database import Base


class TransactionORM(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(Date)
    amount = Column(Float)
    description = Column(String, default="")
    currency = Column(String)
