import { MouseEvent, ReactNode } from 'react';
// import { CSSProperties } from 'csstype';

export interface ButtonT {
  className: string;
  label: string;
  onClick: () => void;
}

export interface ButtonIconT {
  className: string;
  icon: any;
  onClick: () => void;
}

export interface DialogT {
  readonly children: ReactNode;
  className: string;
}
export interface ChildrenT {
  readonly children: ReactNode;
}

export interface DialogHeaderT {
  title: string;
  readonly children: ReactNode;
}

export interface MenuProps {
  readonly children: ReactNode;
  className: string;
}

export interface NavLinkT {
  className: string;
  label: string;
  to: string;
}
