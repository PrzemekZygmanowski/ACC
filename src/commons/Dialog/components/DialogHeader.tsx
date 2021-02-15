import React from "react";

interface DialogHeaderT {
  readonly children: ReactNode;
}

const DialogHeader = ({ children }: DialogHeaderT) => {
  return <div>{children}</div>;
};

export default DialogHeader;
