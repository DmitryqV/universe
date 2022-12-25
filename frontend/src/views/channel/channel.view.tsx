import React, { FunctionComponent, useEffect } from "react";
import { Layout } from "@layouts/export";
import { SocketCore } from "@socket/export";
import s from "./channel.module.scss";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";

export const Channel: FunctionComponent = () => {
  const payload = useTypedSelector((state) => state.Channel);

  return (
    <section className={s.channel__backdrop}>
      <Layout.Responsive>
        <section className={s.channel__wrapper}>
          <section className={s.channel__list}>
            {payload.sockets.map((el: any) => {
              return (
                <div className={s.channel__stream} key={el.socket}>
                  <div className={s.channel__stream__avatar}></div>
                  <p className={s.channel__stream__user}>@{el.socket}</p>
                </div>
              );
            })}
          </section>
        </section>
      </Layout.Responsive>
    </section>
  );
};
