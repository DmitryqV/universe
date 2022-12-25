import React, { FunctionComponent, useEffect } from "react";
import { Layout } from "@layouts/export";
import { SocketCore } from "@socket/export";
import s from "./channel.module.scss";
import { useTypedSelector } from "@hooks/redux.useTypedSelector";
import { useActions } from "@hooks/redux.useActions";

export const Channel: FunctionComponent = () => {
  const { ChannelControllerJoinEvent, ChannelControllerLeaveEvent } =
    useActions();
  const payload = useTypedSelector((state) => state.Channel);
  useEffect(() => {
    SocketCore.socket.emit("join_room", {
      roomName: "test1",
      user: { userId: Math.random().toString(), userName: "tensenrey" },
    });

    SocketCore.socket.on("join_room", (e: any) =>
      ChannelControllerJoinEvent(e)
    );

    SocketCore.socket.on("channel_leave", (e: any) =>
      ChannelControllerLeaveEvent(e)
    );
  }, []);

  return (
    <section
      className={s.channel__backdrop}
      onClick={() => SocketCore.socket.emit("channel", { message: "1234" })}
    >
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
