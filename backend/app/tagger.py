import os

import jellyfish
import pandas as pd

from app.enums import TransactionCategory


class TransactionTagger:

    def __init__(self, path):
        self.company_df = pd.read_csv(path)

    def get_category_by_company_name(self, company_name):
        df = self.company_df.copy()
        df["similarity_scores"] = df.apply(lambda row: jellyfish.jaro_distance(company_name, row["company"]), axis=1)
        match = df.max()

        if match["scores"] > 0.5:
            return TransactionCategory[match["category"].upper()]
        else:
            return TransactionCategory.OTHERS


tagger = TransactionTagger(os.path.join("data", "companies.csv"))
