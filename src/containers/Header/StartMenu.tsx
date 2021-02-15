import React from "react";
import { Dialog, Button, ButtonIcon } from "../../commons";
import {
  DialogHeader,
  DialogContent,
  DialogFooter
} from "../../commons/Dialog";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const StartMenu = ({ isOpen, onClick }: any) => {
  const openDialog = () => {
    console.log("open dialog");
  };

  return (
    <Dialog className={`startDialog startDialog--active-${isOpen}`}>
      <ButtonIcon className="iconBtn" onClick={onClick} icon={faTimesCircle} />
      <Button className="mainBtn" label="Zaczynamy" onClick={openDialog} />
      <Button className="mainBtn" label="Zaczynamy" onClick={openDialog} />
      <Button className="mainBtn" label="Zaczynamy" onClick={openDialog} />
    </Dialog>
  );
};

export default StartMenu;
