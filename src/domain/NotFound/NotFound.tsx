import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/Dialog.scss";
import { Dialog } from "../../commons/Dialog";
import { Button } from "../../commons/Button";
import { DialogHeader } from "../../commons/dialog/DialogHeader";
import { DialogContent } from "../../commons/dialog/DialogContent";
import { DialogFooter } from "../../commons/dialog/DialogFooter";

export const NotFound = () => {
  const navigate = useNavigate();

  const navigateToPrevPage = () => {
    navigate(-1);
  };

  return (
    <Dialog className="startDialog">
      <DialogHeader title="Ups..." isButton={false} />
      <DialogContent>
        <p>Pracuje jeszcze nad tym ;)</p>
      </DialogContent>
      <DialogFooter>
        <Button
          className="mainBtn"
          label="Powrót"
          onClick={navigateToPrevPage}
        />
      </DialogFooter>
    </Dialog>
  );
};
