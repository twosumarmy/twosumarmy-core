from enum import IntEnum


class TransactionCategory(IntEnum):
    CASH = 1  # transaction_type
    ENTERTAINMENT = 2  # ['netflix', 'prime video', 'disney'],
    FOOD = 3  # ['bar', 'restaurant', 'essen'],
    HEALTH = 4  # ['aok'],
    INSURANCE = 5  # ['ergo']
    GROCERY = 6  # ['rewe', 'lidl']
    LOAN = 7  # ['postbank']
    REFUND = 8
    SALARY = 9  # ['gehalt', 'lohn']
    INVESTMENT = 10  # ['trade republik', 'scaleable capital']
    SHOPPING = 11  # ['amazon', 'asos', 'media markt', 'rolex', 'marc gebauer']
    TAX = 12  # ['steuerbüro']
    TRANSPORT = 13  # ['lime', 'uber'],
    TRAVEL = 14  # ['hotel', 'getyourguide', 'tui'],
    OTHERS = 99
