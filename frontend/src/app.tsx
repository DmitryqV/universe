import React, { FunctionComponent } from "react";
import "@ui/null.module.scss";

import { Routes, Route, HashRouter } from "react-router-dom";
import * as View from "@views/export";
import { Provider } from "react-redux";
import { store } from "@store/store";

const AppRouting: FunctionComponent = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<View.Login />} />
      <Route path="/@:username" element={<View.Main />} />
      <Route path="*" element={<View.Error />} />
    </Routes>
  </HashRouter>
);

export const AppCore: FunctionComponent = () => (
  <Provider store={store}>
    <AppRouting />
  </Provider>
);
