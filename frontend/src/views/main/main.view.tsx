import React, { FunctionComponent } from "react";
import s from "./main.module.scss";
import { Layout } from "../../layouts/export";
import { Component } from "../../components/export";

export const Main: FunctionComponent = () => {
  return (
    <Layout.ResponsiveNavbar>
      <section className={s.main}>
        <Component.PersonCard />
        <Component.ContentController />
        <section className={s.card__container}>
          {[1, 2, 3, 4, 5, 6].map((el: number) => (
            <Component.ContentCard key={el} />
          ))}
        </section>
      </section>
    </Layout.ResponsiveNavbar>
  );
};
