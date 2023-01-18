import { createSlice } from "@reduxjs/toolkit";

const initialState = { counterTwo: 0 };

const twoSlice = createSlice({
  name: "two",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counterTwo += 1;
    },
    decrement: (state) => {
      state.counterTwo -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counterTwo += action.payload;
    },
  },
});

export const twoSliceActions = twoSlice.actions;
export default twoSlice.reducer;
