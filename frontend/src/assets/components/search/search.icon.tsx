import React, { FunctionComponent } from "react";

interface ISearchIcon {
  [className: string]: string;
}

export const Search: FunctionComponent<ISearchIcon> = ({className}) => (
  <img src={require("./search.svg")} className={className} />
);
