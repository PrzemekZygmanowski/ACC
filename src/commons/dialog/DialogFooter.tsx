import React, { ReactNode } from "react";

interface DialogFooterT {
  readonly children: ReactNode;
}

const DialogFooter = ({ children }: DialogFooterT) => {
  return <div>{children}</div>;
};

export default DialogFooter;
