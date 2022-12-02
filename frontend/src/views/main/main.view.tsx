import React, { FunctionComponent } from "react";
import s from "./main.module.scss";
import * as Layout from "../../layout/responsive/responsive.layout";

export const MainView: FunctionComponent = () => {
  return (
    <Layout.ResponsiveLayout>
      <section>Main view</section>
    </Layout.ResponsiveLayout>
  );
};
