from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models import TransactionORM
from app.schemas import Transaction, Balance, TransactionCreate


def get_balance(db: Session):
    transaction = db.query(TransactionORM).first()
    return Balance(value=transaction.balance, currency=transaction.currency)


def get_transactions(db: Session, skip: int, limit: int):
    return db.query(TransactionORM).offset(skip).limit(limit).all()


def get_transaction_by_id(transaction_id: int, db: Session):
    return db.query(TransactionORM).where(TransactionORM.id == transaction_id).first()


def get_transaction_group_by_category(db: Session):
    return db.query(TransactionORM.category, func.sum(TransactionORM.amount).label("amount")).group_by(
        TransactionORM.category).all()


def get_transaction_group_by_flow(db: Session):
    return db.query(TransactionORM.flow, func.sum(TransactionORM.amount).label("amount")).group_by(
        TransactionORM.flow).all()


def create_transaction(db: Session, transaction: TransactionCreate):
    transaction_orm = TransactionORM(**transaction.dict())
    db.add(transaction_orm)
    db.commit()
    db.refresh(transaction_orm)
    return True
