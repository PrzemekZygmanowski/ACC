import React, { useState } from "react";
import "./Header.scss";
import { Button, ButtonIcon } from "../../commons";
import { StartMenu, StartHelpDialog } from "../";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHelpDialogOpen, setHelpDialogOpen] = useState(false);
  const openStartDialog = () => {
    setMenuOpen(!isMenuOpen);
  };
  const openHelpDialog = () => {
    setHelpDialogOpen(!isHelpDialogOpen);
  };
  return (
    <>
      <h1>Kalkulator Zysków Ciepła</h1>
      <h2>Oblicz jaką moc powinien mieć Twój klimatyzator</h2>
      <Button className="mainBtn" label="Zaczynamy" onClick={openStartDialog} />
      <ButtonIcon
        className="iconBtn"
        onClick={openHelpDialog}
        icon={faQuestionCircle}
      />
      <StartMenu isOpen={isMenuOpen} onClick={openStartDialog} />
      <StartHelpDialog isOpen={isHelpDialogOpen} onClick={openHelpDialog} />
    </>
  );
};

export default Header;
