import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { AuthReducer } from "./auth/auth.slice";
import { ContentControllerReducer } from "./controller/controller.slice";
import { CardDataReducer } from './data/data.slice';
import { SearchModalReducer } from "./modal/search.modal.slice";

export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    ContentController: ContentControllerReducer,
    CardData: CardDataReducer,
    SearchModal: SearchModalReducer,
  },
  middleware: [thunk],
});

export type TypedRootState = ReturnType<typeof store.getState>;
