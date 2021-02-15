import React from "react";
import { Dialog, ButtonIcon } from "../../commons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const StartHelpDialog = ({ isOpen, onClick }: any) => {
  return (
    <Dialog className={`startHelpDialog startHelpDialog--active-${isOpen}`}>
      <ButtonIcon className="iconBtn" onClick={onClick} icon={faTimesCircle} />
      <h2>Cześć</h2>
      <p>
        Chciałbym zademonstrować swój projekt kalkulatora zysków ciepła
        wspomagającego projektowanie instalacji klimatyzacji dla wszelakich
        budynków. Kalkulator pozwoli Ci oszacować zyski ciepła dla pomieszczeń
        oraz wstępnie określić wymaganą moc klimatyzatora dla pomieszczenia. Aby
        rozpocząć wybierz jedną z poniższych opcji lub wciśnij znak zapytania by
        uzyskać pomoc.
      </p>
      <p>pozdrawiam</p>
      <p>Przemek Zygmanowski</p>
    </Dialog>
  );
};

export default StartHelpDialog;
