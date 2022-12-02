import React, { FunctionComponent } from "react";
import s from "./main.module.scss";
import * as Layout from "../../layout/responsive/responsive.layout";

export const MainView: FunctionComponent = () => {
  return (
    <Layout.ResponsiveLayout>
      <section className={s.main}>
        <article className={s.poster}>
          <div className={s.poster__layout}>
            <div className={s.user__group}>
              <div className={s.user__meta__info}>
                <img
                  className={s.avatar}
                  src={require("../../img/avatar.jpg")}
                />
                <div>
                  <b className={s.username}>centenario</b>
                  <ul className={s.social}>
                    <li className={s.social__link}>Подписаться</li>
                  </ul>
                </div>
              </div>
              <ul className={s.attach}>
                <li className={s.attach__item}>100.000</li>
                <li className={s.attach__item}>100.000</li>
                <li className={s.attach__item}>4.5</li>
              </ul>
              <p className={s.user__description}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                alias ipsum porro magni eligendi repellat optio dolorum nemo
                enim sequi laboriosam
              </p>
            </div>
          </div>
        </article>
      </section>
    </Layout.ResponsiveLayout>
  );
};
