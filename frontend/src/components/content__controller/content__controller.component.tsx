import React, { FunctionComponent, useState } from "react";
import s from "./content__controller.module.scss";
import { useActions } from "./../../hooks/redux.useActions";
import { useTypedSelector } from "./../../hooks/redux.useTypedSelector";

export const ContentController: FunctionComponent = () => {
  const payload = useTypedSelector((state) => state.ContentController);
  const { changeLayout, changeTransform } = useActions();

  return (
    <section className={s.content__controll__container}>
      <ul className={s.content__controll}>
        <li
          className={`${s.content__controll__item} ${
            payload.currentLayout === "posts" &&
            s.content__controll__item__active
          }`}
          onMouseLeave={() =>
            changeTransform(payload.currentLayout === "posts" ? 0 : 200)
          }
          onMouseMove={() => changeTransform(0)}
          onClick={() => changeLayout("posts")}
        >
          Публикации
        </li>
        <li
          className={`${s.content__controll__item} ${
            payload.currentLayout === "broadcast" &&
            s.content__controll__item__active
          }`}
          onMouseLeave={() =>
            changeTransform(payload.currentLayout === "broadcast" ? 200 : 0)
          }
          onMouseMove={() => changeTransform(200)}
          onClick={() => changeLayout("broadcast")}
        >
          Эфиры
        </li>
        <div
          className={s.content__controll__line}
          style={{ transform: `translateX(${payload.transform}px)` }}
        />
      </ul>
    </section>
  );
};
