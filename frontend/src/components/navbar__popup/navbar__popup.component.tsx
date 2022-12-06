import React, { FunctionComponent } from "react";
import s from "./navbar__popup.module.scss";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { useActions } from "@hooks/redux.useActions";

export const NavbarPopup: FunctionComponent = () => {
  const { NavbarPopupChangeNavbarPopUpShow } = useActions();
  const payload = useTypedSelector((state) => state.NavbarPopup);

  return (
    <>
      {payload.show && (
        <ul
          onMouseLeave={() => NavbarPopupChangeNavbarPopUpShow(false)}
          className={s.popup}
        >
          <li className={s.popup__item}>Чаты</li>
          <li className={s.popup__item}>Настройки</li>
          <li className={s.popup__item}>Выйти</li>
        </ul>
      )}
    </>
  );
};
