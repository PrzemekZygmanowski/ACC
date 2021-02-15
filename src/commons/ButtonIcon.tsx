import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Buttons.scss";
import { ButtonIconT } from "./interfaces/interfaces";

const ButtonIcon = ({ className, onClick, icon }: ButtonIconT) => {
  return (
    <button className={className} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default ButtonIcon;
