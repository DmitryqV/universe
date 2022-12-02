import React, { FunctionComponent } from "react";
import s from "./main.module.scss";
import * as Layout from "../../layout/responsive/responsive.layout";

export const MainView: FunctionComponent = () => {
  return (
    <Layout.ResponsiveLayout>
      <section className={s.main}>
        <article className={s.poster}>
          {/* <div className={s.poster__layout}>
            <img className={s.avatar}
            //  src={require("../../img/avatar.jpg")}
              />
            <h3>centenario</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              alias ipsum porro magni eligendi repellat optio dolorum nemo enim
              sequi laboriosam
            </p>
          </div> */}
        </article>
      </section>
    </Layout.ResponsiveLayout>
  );
};
