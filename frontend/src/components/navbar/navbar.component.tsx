import React, { FunctionComponent } from "react";
import { useParams, Link } from "react-router-dom";
import s from "./navbar.module.scss";

export const Navbar: FunctionComponent = () => {
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
            <li className={s.navbar__menu__item}>поиск</li>
            <li className={s.navbar__menu__item}>лента</li>
          </ul>
        <div className={s.user__content}>
          <Link to={`/@${username}`} className={s.username}>
            {username}
          </Link>
          <img
            className={s.avatar}
            src={require("../../img/avatar.jpg")}
            alt={username}
          />
        </div>
      </header>
    </>
  );
};
