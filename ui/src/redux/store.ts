import { configureStore } from "@reduxjs/toolkit";
import balanceSlice from "./reducers/balanceSlice";
import flowSlice from "./reducers/flowSlice";
import transactionSlice from "./reducers/transactionSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionSlice,
    balance: balanceSlice,
    flow: flowSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {transactions: TransactionState}
export type AppDispatch = typeof store.dispatch;
