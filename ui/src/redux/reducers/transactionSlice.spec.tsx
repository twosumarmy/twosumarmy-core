import MockAdapter from "axios-mock-adapter";
import { Transaction } from "../../generated";
import { axiosInstance } from "../../lib/api";
import { store } from "../store";
import transactionSlice, { fetchTransactions } from "./transactionSlice";

describe(transactionSlice.name, () => {
  const mockResponse: ReadonlyArray<Transaction> = [
    {
      id: 1,
      value_date: "2022-08-13",
      amount: 200,
      purpose: "string",
      currency: "string",
      type: "string",
      origin_iban: "string",
      receiver_name: "string",
      receiver_iban: "string",
      receiver_swift_code: "string",
      category: "essen",
      flow: "ausgaben",
      balance: 100,
    },
  ];

  it("should set transactions if action is fulfilled", async () => {
    const mockAxios = new MockAdapter(axiosInstance);
    mockAxios.onGet().replyOnce(200, mockResponse);

    await store.dispatch(fetchTransactions());

    const transactionState = store.getState().transactions;
    expect(transactionState.transactions).toStrictEqual(mockResponse);
    expect(transactionState.isFetching).toBe(false);
    expect(transactionState.error).toBe(undefined);
  });

  it("should set an error if action is rejected", async () => {
    const mockAxios = new MockAdapter(axiosInstance);
    mockAxios.onGet().networkErrorOnce();

    await store.dispatch(fetchTransactions());

    const transactionState = store.getState().transactions;
    expect(transactionState.transactions).toStrictEqual([]);
    expect(transactionState.isFetching).toBe(false);
    expect(transactionState.error).toBeDefined();
  });
});
