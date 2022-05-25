import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducer";
import apiSlice from "./apiSlice";

export const store = configureStore({
  reducer: {
    mainReducer: mainReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
