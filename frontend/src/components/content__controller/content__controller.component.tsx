import React, { FunctionComponent, useEffect } from "react";
import s from "./content__controller.module.scss";
import { useActions } from "./../../hooks/redux.useActions";
import { useTypedSelector } from "./../../hooks/redux.useTypedSelector";
import {Icons} from "../../assets/components/export"

export const ContentController: FunctionComponent = () => {
  const payload = useTypedSelector((state) => state.ContentController);
  const { changeLayout, changeTransform, changeCardData } = useActions();

  useEffect(() => {
    changeCardData([
      {
        title: "Post title",
        author: "@centenario",
        views: "100",
      },
      {
        title: "Post title 3123123123",
        author: "@centenario",
        views: "100",
      },
      {
        title: "Post title 3122222222",
        author: "@centenario",
        views: "1003123123123123",
      },
    ]);
  }, []);

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
          onClick={() => {
            changeLayout("posts");
            changeCardData([
              {
                title: "Post title",
                author: "@centenario",
                views: "100",
              },
              {
                title: "Post title 3123123123",
                author: "@centenario",
                views: "100",
              },
              {
                title: "Post title 3122222222",
                author: "@centenario",
                views: "1003123123123123",
              },
            ]);
          }}
        >
          Публикации
          <Icons.Post />
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
          onClick={() => {
            changeLayout("broadcast");
            changeCardData([
              {
                title: "Broadcast title",
                author: "@centenario",
                views: "100",
              },
              {
                title: "Broadcast title 3123123123",
                author: "@centenario",
                views: "100",
              },
              {
                title: "Broadcast title 3122222222",
                author: "@centenario",
                views: "1003123123123123",
              },
            ]);
          }}
        >
          Эфиры
          <Icons.Broadcast />
        </li>
        <div
          className={s.content__controll__line}
          style={{ transform: `translateX(${payload.transform}px)` }}
        />
      </ul>
    </section>
  );
};
