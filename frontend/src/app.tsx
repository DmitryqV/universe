import React, { FunctionComponent } from "react";
import "@ui/null.module.scss";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as View from "@views/export";
import { Provider } from "react-redux";
import { store } from "@store/store";

const AppRouting: FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<View.Login />} />
      <Route path="/@:username" element={<View.Main />} />
      <Route path="*" element={<View.Error />} />
    </Routes>
  </BrowserRouter>
);

export const AppCore: FunctionComponent = () => (
  <Provider store={store}>
    <AppRouting />
  </Provider>
);
