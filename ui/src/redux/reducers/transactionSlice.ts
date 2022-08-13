import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Transaction } from '../../generated'
import api from '../../lib/api'


interface TransactionState {
  transactions: Array<Transaction>,
  isFetching: boolean;
  error?: string;
}

const initialState: TransactionState = {
  transactions: [],
  isFetching: false,
}

export const fetchTransactions = createAsyncThunk(
    'transaction/getTransactions',
    async () => {
      const response = await api.Transaction.getTransactionsTransactionsGet()
      return response.data
    }
  )

export const transactionSlice = createSlice({
  name: 'transactionSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.pending, (state) => {
        state.isFetching = true
        state.error = undefined
      }),
    builder.addCase(fetchTransactions.rejected, (state, action) => {
        state.transactions = []
        state.error = action.error.message
        state.isFetching = false
      }),
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload
      state.error = undefined
      state.isFetching = false
    })
  },
})

export const selectTransactions = (state: RootState) => state.transactions.transactions

export default transactionSlice.reducer