import React, { FunctionComponent, useEffect } from "react";
import s from "./main.module.scss";
import { Layout } from "../../layouts/export";
import { Component } from "../../components/export";
import { useTypedSelector } from "./../../hooks/redux.useTypedSelector";
import { ICardData } from "./../../store/data/data.slice";

export const Main: FunctionComponent = () => {
  const payload = useTypedSelector((state) => state.CardData);
  return (
    <Layout.ResponsiveNavbar>
      <section className={s.main}>
        <Component.PersonCard />
        <Component.ContentController />
        <section className={s.card__container}>
          {payload.data.map((el: ICardData, index: number) => (
            <Component.ContentCard key={index} card={el} />
          ))}
        </section>
      </section>
    </Layout.ResponsiveNavbar>
  );
};
