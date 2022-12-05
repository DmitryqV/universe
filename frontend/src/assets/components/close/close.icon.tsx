import React, { FunctionComponent } from "react";

interface ICloseIcon {
  [className: string]: string;
}

export const Close: FunctionComponent<ICloseIcon> = ({className}) => (
  <img src={require("../../svg/close.svg")} className={className} />
);
