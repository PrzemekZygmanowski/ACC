import React from 'react';
import { MenuProps } from './interfaces/interfaces';

export const NavMenu = ({ children, className }: MenuProps) => {
  return <nav className={className}>{children}</nav>;
};

