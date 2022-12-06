import React, { FunctionComponent, ChangeEvent } from "react";
import s from "./login.module.scss";
import { useActions } from "@hooks/redux.useActions";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { Link } from "react-router-dom";

export const Login: FunctionComponent = () => {
  const { changeEmail, changePassword } = useActions();
  const payload = useTypedSelector((state) => state.Auth);

  return (
    <section className={s.form__layout}>
      <section className={s.form}>
        <p className={s.navbar__logo}>reconnection</p>
        <input
          className={s.input}
          type="email"
          placeholder="Почта"
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            changeEmail(e.target.value)
          }
        />
        <input
          className={s.input}
          type="password"
          placeholder="Пароль"
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            changePassword(e.target.value)
          }
        />
        <Link
          onClick={() => console.log(payload)}
          className={s.button}
          to={"/@centenario"}
        >
          Войти
        </Link>
      </section>
    </section>
  );
};
