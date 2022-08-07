from sqlalchemy import Float, Column, Integer, String, Date

from app.database import Base


class TransactionORM(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    value_date = Column(Date)
    amount = Column(Float)
    purpose = Column(String, default="")
    currency = Column(String)

    origin_iban = Column(String)

    transaction_type = Column(String)
    receiver_name = Column(String)
    receiver_iban = Column(String)
    receiver_swift_code = Column(String)
