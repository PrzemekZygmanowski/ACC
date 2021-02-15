import React, { useState } from "react";
import "../../styles/Dialog.scss";
import { Dialog, Button, ButtonIcon } from "../../commons";
import { StartHelpDialog } from "../";
import {
  DialogHeader,
  DialogContent,
  DialogFooter
} from "../../commons/dialog";
import {
  faTimesCircle,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

const StartMenu = ({ isOpen, onClick }: any) => {
  const [isStartHelpDialogOpen, setStartHelpDialogOpen] = useState(false);

  const openStartHelpDialog = () => {
    setStartHelpDialogOpen(!isStartHelpDialogOpen);
  };
  const openDialog = () => {
    console.log("open dialog");
  };

  return (
    <Dialog className={`startDialog startDialog--active-${isOpen}`}>
      <DialogHeader title="Zaczynamy">
        <ButtonIcon
          className="iconBtn"
          onClick={onClick}
          icon={faTimesCircle}
        />
      </DialogHeader>
      <DialogContent>
        <h3>Zaloguj się</h3>
        <p>Jeśli chcesz korzystać ze wszystkich dobrodziejstw aplikacji</p>
        <Button className="mainBtn" label="Zaloguj się" onClick={openDialog} />
        <h3>Zarejestruj się</h3>
        <p>Jeżeli nigdy tego nie robiłeś</p>
        <Button
          className="mainBtn"
          label="Zarejestruj się"
          onClick={openDialog}
        />
        <h3>Stwórz projekt</h3>
        <p>Jeżeli chcesz szybko coś policzyć</p>
        <Button
          className="mainBtn"
          label="Stwórz projekt"
          onClick={openDialog}
        />
      </DialogContent>
      <DialogFooter>
        <ButtonIcon
          className="iconBtn"
          onClick={openStartHelpDialog}
          icon={faQuestionCircle}
        />
      </DialogFooter>
      <StartHelpDialog
        isOpen={isStartHelpDialogOpen}
        onClick={openStartHelpDialog}
      />
    </Dialog>
  );
};

export default StartMenu;
