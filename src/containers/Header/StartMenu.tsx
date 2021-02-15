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
          onClick={onClick}
          icon={faTimesCircle}
        />
      </DialogFooter>
    </Dialog>
  );
};

export default StartMenu;
