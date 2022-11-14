import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./auth/auth.slice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
  middleware: [thunk],
});

export type TypedRootState = ReturnType<typeof store.getState>;
