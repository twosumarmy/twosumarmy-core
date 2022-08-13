import { configureStore } from '@reduxjs/toolkit'
import transactionSlice from './reducers/transactionSlice'


export const store = configureStore({
  reducer: {
      transactions: transactionSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {transactions: TransactionState}
export type AppDispatch = typeof store.dispatch
