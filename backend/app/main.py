from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine, Base
from app.routers import transaction, file_upload, balance

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(file_upload.router,
                   prefix="/file_upload",
                   tags=["file_upload"])

app.include_router(transaction.router,
                   prefix="/transactions",
                   tags=["transaction"])

app.include_router(balance.router,
                   prefix="/balance",
                   tags=["balance"])


@app.get("/health")
def health():
    return "Healthy!"
