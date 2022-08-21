import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Balance } from "../../generated";
import api from "../../lib/api";

interface BalanceState {
  balance: Balance | undefined;
  isFetching: boolean;
  error?: string;
}

const initialState: BalanceState = {
  balance: undefined,
  isFetching: false,
};

export const fetchBalance = createAsyncThunk("balance/getBalance", async () => {
  const response = await api.Balance.getBalanceBalanceGet();
  return response.data;
});

export const balanceSlice = createSlice({
  name: "balanceSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBalance.pending, (state) => {
      state.isFetching = true;
      state.error = undefined;
    });
    builder.addCase(fetchBalance.fulfilled, (state, action) => {
      state.balance = action.payload;
      state.error = undefined;
      state.isFetching = false;
    });
    builder.addCase(fetchBalance.rejected, (state, action) => {
      state.balance = undefined;
      state.error = action.error.message;
      state.isFetching = false;
    });
  },
});

export const selectBalance = (state: RootState) => state.balance.balance;

export default balanceSlice.reducer;
