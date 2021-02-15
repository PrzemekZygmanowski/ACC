import React from "react";
import "../../styles/Dialog.scss";
import { Dialog, Button, ButtonIcon } from "../../commons";
import {
  DialogHeader,
  DialogContent,
  DialogFooter
} from "../../commons/dialog";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const StartMenu = ({ isOpen, onClick }: any) => {
  const openDialog = () => {
    console.log("open dialog");
  };

  return (
    <Dialog className={`startDialog startDialog--active-${isOpen}`}>
      <DialogHeader title="zaczynamy">
        <ButtonIcon
          className="iconBtn"
          onClick={onClick}
          icon={faTimesCircle}
        />
      </DialogHeader>
      <DialogContent>
        <Button className="mainBtn" label="Zaczynamy" onClick={openDialog} />
        <Button className="mainBtn" label="Zaczynamy" onClick={openDialog} />
        <Button className="mainBtn" label="Zaczynamy" onClick={openDialog} />
      </DialogContent>
      <DialogFooter>
        <ButtonIcon
          className="iconBtn"
          onClick={onClick}
          icon={faTimesCircle}
        />
      </DialogFooter>
    </Dialog>
  );
};

export default StartMenu;
