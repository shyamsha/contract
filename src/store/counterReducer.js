// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  countVal: 16,
};

const counterReducer = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    setCountVal: (state, { payload }) => {
      state.countVal = payload;
    },
  },
});

export const { setCountVal } = counterReducer.actions;
export const counter = (state) => state.counter;

export default counterReducer.reducer;
