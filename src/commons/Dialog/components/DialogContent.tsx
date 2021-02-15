import React, { ReactNode } from "react";

interface DialogContentT {
  readonly children: ReactNode;
}

const DialogContent = ({ children }: DialogContentT) => {
  return <div>{children}</div>;
};

export default DialogContent;
