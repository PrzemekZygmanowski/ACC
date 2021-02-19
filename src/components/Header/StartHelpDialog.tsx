import React from 'react';
import { HelpDialog, ButtonIcon } from '../../commons';
import { DialogHeader, DialogContent } from '../../commons/dialog/';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const StartHelpDialog = ({ isOpen, onClick }: any) => {
  return (
    <HelpDialog className={`startHelpDialog startHelpDialog--active-${isOpen}`}>
      <DialogHeader title='Pomoc' isButton>
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
          W tej chwili jedyną dostępną opcją kalkulatora jest stworzenie
          pojedynczego projektu. Nad pozostałymi opcjami pracuje cały czas. W
          założeniu po zarejestrowaniu i zalogowaniu użytkownik będzie mógł
          stworzyć więcej niż jeden projekt, zapisać każdy z nich, dla każdego z
          projektów nie będzie ograniczeń liczby pomieszczeń i będzie możliwość
          wyeksportowania obliczeń do PDF lub Excela. Opcja pojedynczego
          projektu jest idealna do szybkich obliczeń pojedynczego pomieszczenia
          lub domku jednorodzinnego.
        </p>
      </DialogContent>
    </HelpDialog>
  );
};

export default StartHelpDialog;
