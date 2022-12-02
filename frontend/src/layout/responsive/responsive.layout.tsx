import React, { FunctionComponent } from "react";
import s from "./responsive.module.scss";
import * as Component from "../../components/export";

interface IResponsiveLayout {
  children: JSX.Element;
}

export const ResponsiveLayout: FunctionComponent<IResponsiveLayout> = ({
  children,
}) => {
  return (
    <>
      <section className={s.layout}>
        <section className={s.responsive}>
          <Component.NavbarComponent />
          {children}
        </section>
      </section>
    </>
  );
};
