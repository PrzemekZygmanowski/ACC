import React from 'react';
import { MenuProps } from './interfaces/interfaces';

const NavMenu = ({ children, className }: MenuProps) => {
  return <nav className={className}>{children}</nav>;
};

export default NavMenu;
