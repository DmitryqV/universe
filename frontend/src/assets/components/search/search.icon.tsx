import React, { FunctionComponent } from "react";

interface ISearchIcon {
  [className: string]: string;
}

export const Search: FunctionComponent<ISearchIcon> = ({className}) => (
  <img src={require("../../svg/search.svg")} className={className} />
);
