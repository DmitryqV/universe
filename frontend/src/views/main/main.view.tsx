import React, { FunctionComponent } from "react";
import s from "./main.module.scss";
import { Layout } from "../../layouts/export";
import { Component } from "../../components/export";

export const Main: FunctionComponent = () => (
  <Layout.ResponsiveNavbar>
    <section className={s.main}>
      <Component.PersonCard />
    </section>
  </Layout.ResponsiveNavbar>
);
