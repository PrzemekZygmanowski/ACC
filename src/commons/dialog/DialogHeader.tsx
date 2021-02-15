import React, { ReactNode } from "react";
import CSS from "csstype";

const DialogHeaderS: CSS.Properties = {
  display: "flex"
};
const IconsS: CSS.Properties = {
  position: "fixed",
  right: "5%"
};

interface DialogHeaderT {
  title: string;
  readonly children: ReactNode;
}

const DialogHeader = ({ title, children }: DialogHeaderT) => {
  return (
    <div style={DialogHeaderS}>
      <div>
        <h2>{title}</h2>
      </div>
      <div style={IconsS}>{children}</div>
    </div>
  );
};

export default DialogHeader;
