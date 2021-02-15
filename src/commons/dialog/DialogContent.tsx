import React, { ReactNode } from "react";
import CSS from "csstype";

const DialogContentS: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  height: "80%",
  width: "100%"
};
interface DialogContentT {
  readonly children: ReactNode;
}

const DialogContent = ({ children }: DialogContentT) => {
  return <div style={DialogContentS}>{children}</div>;
};

export default DialogContent;
