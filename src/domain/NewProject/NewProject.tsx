import React, { useState } from 'react';
import '../../styles/Dialog.scss';
import { Dialog, Button, ButtonIcon } from '../../commons';
import NewProjectForm from './components/NewProjectForm';
import {
  DialogHeader,
  DialogContent,
  DialogFooter,
} from '../../commons/dialog/';
import {
  faTimesCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

const NewProject = () => {
  const onClick = () => {
    console.log('powrót');
  };
  const openNewProjectHelper = () => {
    console.log('pomoc');
  };
  return (
    <Dialog className='startDialog'>
      <DialogHeader title='Nowy Projekt' isButton>
        <ButtonIcon
          className='iconBtn'
          onClick={onClick}
          icon={faTimesCircle}
        />
      </DialogHeader>
      <DialogContent>
        <NewProjectForm />
      </DialogContent>
      <DialogFooter>
        <ButtonIcon
          className='iconBtn'
          onClick={openNewProjectHelper}
          icon={faQuestionCircle}
        />
      </DialogFooter>
    </Dialog>
  );
};

export default NewProject;
