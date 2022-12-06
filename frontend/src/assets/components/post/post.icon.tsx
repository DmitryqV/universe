import React, { FunctionComponent } from "react";

interface IPostIcon {
  [className: string]: string;
}

export const Post: FunctionComponent<IPostIcon> = ({ className }) => (
  <img src={require("./post.svg")} className={className} />
);
