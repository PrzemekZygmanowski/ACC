import React, { useState } from 'react';
import '../../../styles/Dialog.scss';
import { Dialog, Button, ButtonIcon } from '../../../commons';
import { NewProjectForm } from '../container/NewProjectForm';
import NewRoomForm from '../components/NewRoomForm';
import RoomList from '../container/RoomList';
import { DialogHeader } from '../../../commons/dialog/DialogHeader';
import { DialogContent } from '../../../commons/dialog/DialogContent';
import { DialogFooter } from '../../../commons/dialog/DialogFooter';
import {
  faTimesCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import Room from '../components/Room';

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
        <NewRoomForm />
        <RoomList />
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
