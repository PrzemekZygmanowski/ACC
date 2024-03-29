import React from 'react';
import { HelpDialog } from '../../commons/HelpDialog';
import {  ButtonIcon } from '../../commons/ButtonIcon';
import { DialogHeader } from '../../commons/dialog/DialogHeader';
import { DialogContent } from '../../commons/dialog/DialogContent';
import { DialogFooter } from '../../commons/dialog/DialogFooter';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export const HeaderHelpDialog = ({ isOpen, onClick }: any) => {
  return (
    <HelpDialog className={`startHelpDialog startHelpDialog--active-${isOpen}`}>
      <DialogHeader title='Cześć' isButton>
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
