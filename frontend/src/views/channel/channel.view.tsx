import React, { FunctionComponent } from "react";
import { Layout } from "@layouts/export";
import { socket } from "@/web__sockets/socket";
import s from "./channel.module.scss";

export const Channel: FunctionComponent = () => {
  return (
    <section
      className={s.channel__backdrop}
      onClick={() => socket.emit("channel", { message: "1234" })}
    >
      <Layout.Responsive>
        <section className={s.channel__wrapper}>
          <section className={s.channel__list}>
            <div className={s.channel__stream}>
              <div className={s.channel__stream__avatar}></div>
              <p className={s.channel__stream__user}>@centenario</p>
            </div>
            <div className={s.channel__stream}>
              <div className={s.channel__stream__avatar}></div>
              <p className={s.channel__stream__user}>@centenario</p>
            </div>
          </section>
        </section>
      </Layout.Responsive>
    </section>
  );
};
