from fastapi import FastAPI

from app.database import engine, Base
from app.routers import transaction, file_upload

Base.metadata.create_all(bind=engine)

app = FastAPI()


app.include_router(file_upload.router,
                   prefix="/file_upload",
                   tags=["file_upload"])


app.include_router(transaction.router,
                   prefix="/transactions",
                   tags=["transaction"])


@app.get("/health")
def health():
    return "Healthy!"
