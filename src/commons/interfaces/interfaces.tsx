import { MouseEvent, ReactNode } from "react";
import { CSSProperties } from "csstype";

interface ButtonT {
  className: string;
  label: string;
  onClick: MouseEvent<HTMLButtonElement, MouseEvent>;
}

interface ButtonIconT {
  className: string;
  icon: any;
  onClick: MouseEvent<HTMLButtonElement, MouseEvent>;
}

interface DialogT {
  className: string;
  readonly children: ReactNode;
}

interface MenuProps {
  readonly children: ReactNode;
  styles: CSSProperties | undefined;
}

interface NavLinkT {
  className: string;
  label: string;
  to: string;
}
export { ButtonT, ButtonIconT, DialogT, MenuProps, NavLinkT };
