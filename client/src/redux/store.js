import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./counter/transferEmailSlice";

export const store = configureStore({
  reducer: {
    email: emailReducer,
  },
});
