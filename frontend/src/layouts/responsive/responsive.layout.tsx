import React, { FunctionComponent } from "react";
import s from "./responsive.module.scss";
import { Component } from "@components/export";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { Modals } from "@modals/export";

interface IResponsiveLayout {
  children: JSX.Element;
}

export const Responsive: FunctionComponent<IResponsiveLayout> = ({
  children,
}) => (
  <>
    <section className={s.layout}>
      <section className={s.responsive}>{children}</section>
    </section>
  </>
);

export const ResponsiveNavbar: FunctionComponent<IResponsiveLayout> = ({
  children,
}) => {
  const payload = useTypedSelector((state) => state.SearchModal);
  return (
    <Responsive>
      <>
        <Modals.Search />
        <div style={payload.show ? { opacity: 0.1 } : {}}>
          <Component.Navbar />
          {children}
        </div>
      </>
    </Responsive>
  );
};
