import React, { FunctionComponent } from "react";
import s from "./main.module.scss";
import * as Layout from "../../layout/responsive/responsive.layout";
import * as Component from "../../components/export";

export const Main: FunctionComponent = () => (
  <Layout.ResponsiveNavbar>
    <section className={s.main}>
      <Component.PersonCard />
    </section>
  </Layout.ResponsiveNavbar>
);
