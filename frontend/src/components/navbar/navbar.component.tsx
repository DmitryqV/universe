import React, { FunctionComponent } from "react";
import { useParams, Link } from "react-router-dom";
import s from "./navbar.module.scss";

export const NavbarComponent: FunctionComponent = () => {
  const { username } = useParams();

  return (
    <>
      <div className={s.navbar}>
        <div className={s.layer__content}>
        <ul className={s.navbar__menu}>
            <li className={`${s.navbar__menu__item} ${s.navbar__logo}`}>
              reconnection
            </li>
            <li className={s.navbar__menu__item}>
              Поиск
            </li>
            <li className={s.navbar__menu__item}>
              лента
            </li>
          </ul>
          <div className={s.user__content}>
            <Link to={`/@${username}`} className={s.username}>
              {username}
            </Link>
            <img
              className={s.avatar}
              src={require("../../img/navbar.avatar.jpg")}
              alt={username}
            />
          </div>
        </div>
      </div>
    </>
  );
};
