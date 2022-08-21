import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { RootState } from "../store";
import { TransactionByType } from "../../generated";
import api from "../../lib/api";

interface FlowState {
  flow: Array<TransactionByType> | undefined;
  isFetching: boolean;
  error?: string;
}

const initialState: FlowState = {
  flow: undefined,
  isFetching: false,
};

export const fetchFlow = createAsyncThunk(
  "transaction/getTransactionGroupByFlowTransactionsGroupByFlowGets",
  async ({ startDate }: { startDate: Date }) => {
    const response =
      await api.Transaction.getTransactionGroupByFlowTransactionsGroupByFlowGet(
        format(startDate, "yyyy-MM-dd")
      );
    return response.data;
  }
);

export const flowSlice = createSlice({
  name: "flowSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFlow.pending, (state) => {
      state.isFetching = true;
      state.error = undefined;
    });
    builder.addCase(fetchFlow.fulfilled, (state, action) => {
      state.flow = action.payload;
      state.error = undefined;
      state.isFetching = false;
    });
    builder.addCase(fetchFlow.rejected, (state, action) => {
      state.flow = undefined;
      state.error = action.error.message;
      state.isFetching = false;
    });
  },
});

export const selectFlow = (state: RootState) => state.flow;

export default flowSlice.reducer;
