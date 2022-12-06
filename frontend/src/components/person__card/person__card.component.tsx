import React, { FunctionComponent } from "react";
import s from "./person__card.module.scss";
import { useParams } from "react-router-dom";
import { Icons } from "@assets/components/export";

export const PersonCard: FunctionComponent = () => {
  const { username } = useParams();

  return (
    <section className={s.poster}>
      <div className={s.poster__layout}>
        <div className={s.user__group}>
          <div className={s.user__meta__info}>
            <img className={s.avatar} src={require("../../assets/img/avatar.jpg")} />
            <div>
              <b className={s.username}>
                {username}
                <div className={s.verify}>
                  <Icons.Verify />
                </div>
              </b>
              <ul className={s.social}>
                <li className={s.social__link}>Подписаться</li>
              </ul>
            </div>
          </div>
          <ul className={s.attach}>
            <li className={s.attach__item}>
              100.000
              <Icons.Followers />
            </li>
            <li className={s.attach__item}>
              100.000
              <Icons.Reactions />
            </li>
            <li className={s.attach__item}>
              4.5
              <Icons.Rating />
            </li>
          </ul>
          <p className={s.user__description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem alias
            ipsum porro magni eligendi repellat optio dolorum nemo enim sequi
            laboriosam
          </p>
        </div>
      </div>
    </section>
  );
};
