import React, { useState } from 'react';
import '../../styles/Dialog.scss';
import { Dialog, Button, ButtonIcon } from '../../commons';
import { StartHelpDialog } from '..';
import {
  DialogHeader,
  DialogContent,
  DialogFooter,
} from '../../commons/dialog/';
import {
  faTimesCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

const NewProject = ({ isOpen, onClick }: any) => {
  const [isStartHelpDialogOpen, setStartHelpDialogOpen] = useState(false);

  const openStartHelpDialog = () => {
    setStartHelpDialogOpen(!isStartHelpDialogOpen);
  };
  const openDialog = () => {
    console.log('open dialog');
  };

  return (
    <Dialog className={`startDialog startDialog--active-${isOpen}`}>
      <h1>start new project</h1>
    </Dialog>
  );
};

export default NewProject;
