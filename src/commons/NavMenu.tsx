import React from "react";
import { MenuProps } from "./interfaces/interfaces";
import { CSSProperties } from "csstype";

const NavMenu = ({ children, styles }: MenuProps) => {
  return <nav style={styles}>{children}</nav>;
};

export default NavMenu;
