import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import oneSlice from "./oneSlice";
import twoSlice from "./twoSlice";

const rootReducer = combineReducers({ one: oneSlice, two: twoSlice });

export const store = configureStore({
  reducer: rootReducer,
  // other options e.g middleware, go here
});
