import React, { FunctionComponent, useEffect } from "react";
import "@ui/null.module.scss";

import { Routes, Route, HashRouter } from "react-router-dom";
import { View } from "@views/export";
import { Provider } from "react-redux";
import { store } from "@store/store";
import { SocketCore } from "@socket/export";

const AppRouting: FunctionComponent = () => {
  useEffect(() => {
    SocketCore.socket.on("channel", (e: any) => {
      console.log(e);
    });
  }, []);

  return (
  <HashRouter>
    <Routes>
      <Route path="/" element={<View.Login />} />
      <Route path="/@:username" element={<View.Main />} />
      <Route path="/channel/:channelID" element={<View.Channel />} />
      <Route path="*" element={<View.Error />} />
    </Routes>
  </HashRouter>
  );
};

export const AppCore: FunctionComponent = () => (
  <Provider store={store}>
    <AppRouting />
  </Provider>
);
