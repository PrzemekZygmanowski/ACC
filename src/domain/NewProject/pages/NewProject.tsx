import React, { useState, useEffect } from 'react';
import '../../../styles/Dialog.scss';
import { Dialog, Button, ButtonIcon } from '../../../commons';
import { NewProjectForm } from '../container/NewProjectForm';
import { NewRoomForm } from '../container/NewRoomForm';
import RoomList from '../container/RoomList';
import { DialogHeader } from '../../../commons/dialog/DialogHeader';
import { DialogContent } from '../../../commons/dialog/DialogContent';
import { DialogFooter } from '../../../commons/dialog/DialogFooter';
import {
  faTimesCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import Room from '../components/Room';
import { NewProjectCard } from '../container/NewProjectCard';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../interfaces';
import { ProjectValues } from '../interfaces';

const NewProject = () => {
  const [isProjectProvided, setProjectProvided] = useState(false);
  const newProject = useSelector<State, ProjectValues>(
    (state) => state.newProject
  );

  useEffect(() => {
    if (newProject.projectTitle !== '') {
      setProjectProvided(true);
    } else if (newProject.projectTitle === '') {
      setProjectProvided(false);
    }
  }, [newProject]);

  console.log();
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
        {!isProjectProvided ? <NewProjectForm /> : <NewProjectCard />}
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
