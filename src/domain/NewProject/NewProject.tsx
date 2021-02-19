import React, { useState } from 'react';
import '../../styles/Dialog.scss';
import { Dialog, Button, ButtonIcon } from '../../commons';
import NewProjectForm from './components/NewProjectForm';
import {
  DialogHeader,
  DialogContent,
  DialogFooter,
} from '../../commons/dialog/';

const NewProject = () => {
  return (
    <Dialog className={`startDialog `}>
      <NewProjectForm />
    </Dialog>
  );
};

export default NewProject;
