import React, { FunctionComponent } from "react";

interface ICloseIcon {
  [className: string]: string;
}

export const Close: FunctionComponent<ICloseIcon> = ({className}) => (
  <img src={require("./close.svg")} className={className} />
);
