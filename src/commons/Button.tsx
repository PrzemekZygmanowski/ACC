import React from "react";
import "./Buttons.scss";
import { ButtonT } from "./interfaces/interfaces";

const Burger = ({ className, onClick, label }: ButtonT) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Burger;
