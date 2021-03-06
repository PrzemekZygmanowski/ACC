import React, { useState } from 'react';
import '../../styles/Dialog.scss';
import '../../commons/MenuStyle.scss';
import { Dialog, ButtonIcon, NavLink, NavMenu } from '../../commons';
import { StartHelpDialog } from './StartHelpDialog';
import { DialogHeader } from '../../commons/dialog/DialogHeader';
import { DialogContent } from '../../commons/dialog/DialogContent';
import { DialogFooter } from '../../commons/dialog/DialogFooter';
import {
  faTimesCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

export const StartMenu = ({ isOpen, onClick }: any) => {
  const [isStartHelpDialogOpen, setStartHelpDialogOpen] = useState(false);

  const openStartHelpDialog = () => {
    setStartHelpDialogOpen(!isStartHelpDialogOpen);
  };
  const openDialog = () => {
    console.log('open dialog');
  };

  return (
    <Dialog className={`startDialog startDialog--active-${isOpen}`}>
      <DialogHeader title='Zaczynamy' isButton>
        <ButtonIcon
          className='iconBtn'
          onClick={onClick}
          icon={faTimesCircle}
        />
      </DialogHeader>
      <DialogContent>
        <NavMenu className='startMenu'>
          <h3>Zaloguj się</h3>
          <p>Jeśli chcesz korzystać ze wszystkich dobrodziejstw aplikacji</p>
          <NavLink className='linkBtn' label='Zaloguj się' to='/logIn' />
          <h3>Zarejestruj się</h3>
          <p>Jeżeli nigdy tego nie robiłeś</p>
          <NavLink className='linkBtn' label='Zarejestruj się' to='/signUp' />
          <h3>Stwórz projekt</h3>
          <p>Jeżeli chcesz szybko coś policzyć</p>
          <NavLink
            className='linkBtn'
            label='Stwórz projekt'
            to='/newProject'
          />
        </NavMenu>
      </DialogContent>
      <DialogFooter>
        <ButtonIcon
          className='iconBtn'
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
