import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CounterState } from '@/shared/types';

const initialState: CounterState = {
  count: 0,
  loading: false,
};

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    reset: state => {
      state.count = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => {
        state.loading = true;
      })
      .addCase(incrementAsync.fulfilled, state => {
        state.loading = false;
        state.count += 1;
      });
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
