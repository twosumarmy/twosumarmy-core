type CurrencyVariant = "EUR";

export class Money {
  public readonly amount: number;
  public readonly currency: string;

  constructor(amount: number, currency: CurrencyVariant) {
    this.amount = amount;
    this.currency = currency;
  }

  public get isPositive(): boolean {
    return this.amount >= 0;
  }

  public get formatted(): string {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: this.currency,
    }).format(this.amount);
  }
}
