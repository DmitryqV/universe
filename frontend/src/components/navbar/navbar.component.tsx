import React, { FunctionComponent } from "react";
import { useParams, Link } from "react-router-dom";
import s from "./navbar.module.scss";
import { Icons } from "../../assets/components/export";
import { useActions } from "../../hooks/redux.useActions";
import { Component } from "../export";

export const Navbar: FunctionComponent = () => {
  const { changeShow, changeNavbarPopUpShow } = useActions();
  const { username } = useParams();

  return (
    <>
      <header className={s.navbar}>
        <ul className={s.navbar__menu}>
          <li className={`${s.navbar__menu__item} ${s.navbar__logo}`}>
            reconnection
          </li>
        </ul>
        <ul className={s.navigation}>
          <li className={s.navigation__item}>
            <a
              className={s.navbar__menu__item}
              onClick={() => changeShow(true)}
            >
              поиск
              <Icons.Search />
            </a>
          </li>
          <li className={s.navigation__item}>
            <a className={s.navbar__menu__item}>
              лента
              <Icons.Post />
            </a>
          </li>
        </ul>
        <div
          className={s.user__content}
          onClick={() => changeNavbarPopUpShow(true)}
        >
          <Link to={`/@${username}`} className={s.username}>
            {username}
          </Link>
          <img
            className={s.avatar}
            src={require("../../assets/img/avatar.jpg")}
            alt={username}
          />
          <Component.NavbarPopup />
        </div>
      </header>
    </>
  );
};
