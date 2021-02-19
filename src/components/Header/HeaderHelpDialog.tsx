import React from 'react';
import { HelpDialog, ButtonIcon } from '../../commons';
import {
  DialogHeader,
  DialogContent,
  DialogFooter,
} from '../../commons/dialog/';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const HeaderHelpDialog = ({ isOpen, onClick }: any) => {
  return (
    <HelpDialog className={`startHelpDialog startHelpDialog--active-${isOpen}`}>
      <DialogHeader title='Cześć'>
        {' '}
        <ButtonIcon
          className='iconBtn'
          onClick={onClick}
          icon={faTimesCircle}
        />
      </DialogHeader>
      <DialogContent>
        {' '}
        <p>
          Chciałbym zademonstrować swój projekt kalkulatora zysków ciepła
          wspomagającego projektowanie instalacji klimatyzacji dla wszelakich
          budynków. Kalkulator pozwoli Ci oszacować zyski ciepła dla pomieszczeń
          oraz wstępnie określić wymaganą moc klimatyzatora dla pomieszczenia.
          Aby rozpocząć wybierz jedną z poniższych opcji lub wciśnij znak
          zapytania by uzyskać pomoc.
        </p>
      </DialogContent>
      <DialogFooter>
        {' '}
        <p>pozdrawiam</p>
        <h3>Przemek Zygmanowski</h3>
      </DialogFooter>
    </HelpDialog>
  );
};

export default HeaderHelpDialog;
