import React, { FunctionComponent } from "react";
import s from "./navbar.module.scss";

export const NavbarComponent: FunctionComponent = () => {
  return (
    <>
      <div className={s.navbar}>
        <img src={require("../../img/navbar.avatar.svg")} alt="" />
        <a href="" className={s.navbar__text}>username</a>
      </div>
    </>
  );
};
