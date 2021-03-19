import { CSSProperties, ReactNode } from 'react';
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

export interface SubmitT {
  className: string;
  label: string;
  type: 'button' | 'submit' | 'reset';
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
  readonly children?: ReactNode;
  isButton: boolean;
}

export interface MenuProps {
  readonly children: ReactNode;
  className: string;
}
export interface InputWrapperT {
  readonly children: ReactNode;
  className: string;
}

export interface NavLinkT {
  className: string;
  label: string;
  to: string;
}

export interface LinkIconT {
  className: string;
  to: string;
  icon: any;
}

export interface LabelT {
  label: string;
  name: string;
}
