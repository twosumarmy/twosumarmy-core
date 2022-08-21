from enum import Enum


class TransactionCategory(Enum):
    CASH = "barzahlung"  # transaction_type
    ENTERTAINMENT = "entertainment"  # ['netflix', 'prime video', 'disney'],
    FOOD = "essen"  # ['bar', 'restaurant', 'essen'],
    HEALTH = "gesundheit"  # ['aok'],
    INSURANCE = "versicherung"  # ['ergo']
    GROCERY = "lebensmittel"  # ['rewe', 'lidl']
    LOAN = "zinsen"  # ['postbank']
    REFUND = "rückerstattung"
    SALARY = "gehalt"  # ['gehalt', 'lohn']
    INVESTMENTS = "anlage"  # ['trade republik', 'scaleable capital']
    SHOPPING = "shopping"  # ['amazon', 'asos', 'media markt', 'rolex', 'marc gebauer']
    TAX = "steuern"  # ['steuerbüro']
    TRANSPORT = "transport"  # ['lime', 'uber'],
    TRAVEL = "reise"  # ['hotel', 'getyourguide', 'tui'],
    OTHERS = "andere"


class TransactionType(Enum):
    income = "einkommen"
    expenses = "ausgaben"
