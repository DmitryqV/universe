import React, { FunctionComponent } from "react";
import "./ui/null.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Views from "./views/export";
import { Provider } from "react-redux";
import { store } from './store/store';

const AppRouting: FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Views.LoginView />} />
      <Route path="/@:username" element={<Views.MainView />} />
      <Route path="*" element={<Views.ErrorView />} />
    </Routes>
  </BrowserRouter>
);

export const AppCore: FunctionComponent = () => (
  <Provider store={store}>
    <AppRouting />
  </Provider>
);
