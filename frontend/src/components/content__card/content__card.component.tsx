import React, { FunctionComponent } from 'react';
import s from "./content__card.module.scss";
import { ICardData } from '@store/slices/data/data.slice';

interface IContentCard {
  card: ICardData,
}

export const ContentCard: FunctionComponent<IContentCard> = ({ card }) => (
  <div className={s.card}>
    <div className={s.card__poster}></div>
    <b className={s.card__title}>{card.title}</b>
    <span className={s.card__meta}>
      <p className={s.card__author}>{card.author}</p>
      <p className={s.card__views}>{card.views}</p>
    </span>
  </div>
);
