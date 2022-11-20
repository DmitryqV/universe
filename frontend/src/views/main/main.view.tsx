import React, { FunctionComponent } from "react";
import s from "./main.module.scss";
import * as Component from "../../components/export";

export const MainView: FunctionComponent = () => (
  <>
    <Component.NavbarComponent />
    <section>Main view</section>
  </>
);
