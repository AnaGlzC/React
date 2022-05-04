import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10
  },
  reducers: {
    increment: (state) => {
      state.count += 10;
    },
    decrement: (state) => {
      state.count -= 10;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
