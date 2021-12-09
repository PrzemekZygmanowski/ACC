import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinkT } from "./interfaces/interfaces";

export const Link = ({ className, label, to }: NavLinkT) => {
  return (
    <NavLink className={className} to={to}>
      {label}
    </NavLink>
  );
};
