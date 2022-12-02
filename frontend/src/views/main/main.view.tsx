import React, { FunctionComponent } from "react";
import s from "./main.module.scss";
import * as Layout from "../../layout/responsive/responsive.layout";
import * as Component from "../../components/export";

export const MainView: FunctionComponent = () => {
  return (
    <Layout.ResponsiveNavbarLayout>
      <section className={s.main}>
        <Component.PersonCardComponent />
      </section>
    </Layout.ResponsiveNavbarLayout>
  );
};
