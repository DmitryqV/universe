import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./auth/auth.slice";
import { ContentControllerReducer } from "./controller/controller.slice";
import thunk from "redux-thunk";
import { CardDataReducer } from './data/data.slice';

export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    ContentController: ContentControllerReducer,
    CardData: CardDataReducer,
  },
  middleware: [thunk],
});

export type TypedRootState = ReturnType<typeof store.getState>;
