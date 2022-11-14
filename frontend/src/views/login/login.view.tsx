import React, { FunctionComponent, ChangeEvent } from "react";
import s from "./login.module.scss";
import { useActions } from "./../../hooks/redux.useActions";
import { useTypedSelector } from "./../../hooks/redux.useTypedSelector";

export const LoginView: FunctionComponent = () => {
  const { changeEmail, changePassword } = useActions();
  const payload = useTypedSelector((state) => state.auth);

  return (
    <section className={s.form}>
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
      <button className={s.button} onClick={() => console.log(payload)}>
        Войти
      </button>
    </section>
  );
};
