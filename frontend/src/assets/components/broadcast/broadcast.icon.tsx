import React, { FunctionComponent } from "react";

interface IBroadcastIcon {
  [className: string]: string;
}

export const Broadcast: FunctionComponent<IBroadcastIcon> = ({ className }) => (
  <img src={require("../../svg/broadcast.svg")} className={className} />
);
