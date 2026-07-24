import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import contactReducer from "./contactSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    contact: contactReducer,
  },
});