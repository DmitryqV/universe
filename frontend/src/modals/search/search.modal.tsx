import React, { FunctionComponent } from "react";
import s from "./search__modal.module.scss";
import { Layout } from "../../layouts/export";
import { Icons } from "../../assets/components/export";
import { useTypedSelector } from "../../hooks/redux.useTypedSelector";
import { useActions } from "../../hooks/redux.useActions";

export const Search: FunctionComponent = () => {
  const payload = useTypedSelector((state) => state.SearchModal);
  const { changeShow } = useActions();
  return (
    <>
      {payload.show && (
        <div className={s.backdrop}>
          <Layout.Responsive>
            <div className={s.search__container}>
              <Icons.Search />
              <input
                className={s.search__input}
                placeholder="Type something"
                type="text"
              />
              <div onClick={() => changeShow(false)}>X</div>
            </div>
          </Layout.Responsive>
        </div>
      )}
    </>
  );
};
