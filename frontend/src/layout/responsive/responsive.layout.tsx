import React, { FunctionComponent } from "react";
import s from "./responsive.module.scss";
import * as Component from "../../components/export";

interface IResponsiveLayout {
  children: JSX.Element;
}

export const ResponsiveLayout: FunctionComponent<IResponsiveLayout> = ({
  children,
}) => (
  <>
    <section className={s.layout}>
      <section className={s.responsive}>{children}</section>
    </section>
  </>
);

export const ResponsiveNavbarLayout: FunctionComponent<IResponsiveLayout> = ({
  children,
}) => (
  <ResponsiveLayout>
    <>
      <Component.NavbarComponent />
      {children}
    </>
  </ResponsiveLayout>
);
