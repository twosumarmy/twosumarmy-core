from sqlalchemy.orm import Session

from app.models.transaction import TransactionORM
from app.schemas.transaction import Transaction


def get_transactions(db: Session, skip: int = 0, limit: int = 100):
    return db.query(TransactionORM).offset(skip).limit(limit).all()


def create_transaction(db: Session, transaction: Transaction):
    transaction_orm = TransactionORM(**transaction.dict())
    db.add(transaction_orm)
    db.commit()
    db.refresh(transaction_orm)
    return True
