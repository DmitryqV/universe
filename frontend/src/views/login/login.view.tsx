import React, { FunctionComponent, ChangeEvent } from "react";
import s from "./login.module.scss";
import { useActions } from "@hooks/redux.useActions";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";

export const Login: FunctionComponent = () => {
  const { AuthChangeEmail, AuthChangePassword } = useActions();
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
            AuthChangeEmail(e.target.value)
          }
        />
        <input
          className={s.input}
          type="password"
          placeholder="Пароль"
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            AuthChangePassword(e.target.value)
          }
        />
        <button
          onClick={() => console.log(payload)}
          className={s.button}
        >
          Войти
        </button>
      </section>
    </section>
  );
};
