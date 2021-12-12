import React from "react";
import CSS from "csstype";
import { DialogHeaderT } from "../interfaces/interfaces";

const DialogHeaderS: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: "100%",
};
const TitleS: CSS.Properties = {
  width: "90%",
};

const IconsS: CSS.Properties = {
  position: "relative",
  // right: "10%",
};

export const DialogHeader = ({ title, children, isButton }: DialogHeaderT) => {
  return (
    <div style={DialogHeaderS}>
      <div style={TitleS}>
        <h2>{title}</h2>
      </div>
      {isButton && <div style={IconsS}>{children}</div>}
    </div>
  );
};
