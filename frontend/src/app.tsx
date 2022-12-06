import React, { FunctionComponent } from "react";
import "./ui/null.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
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
