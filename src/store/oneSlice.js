import { createSlice } from "@reduxjs/toolkit";

const initialState = { counterOne: 0 };

const oneSlice = createSlice({
  name: "one",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counterOne += 1;
    },
    decrement: (state) => {
      state.counterOne -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counterOne += action.payload;
    },
  },
});

export const oneSliceActions = oneSlice.actions;
export default oneSlice.reducer;
