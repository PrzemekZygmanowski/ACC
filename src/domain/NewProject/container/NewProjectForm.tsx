import React, { FC } from 'react';
import {
  NewProjectForm as NewProjectFormComponent,
  newProjectFormT,
} from '../components/NewProjectForm';
import { ProjectValues } from '../interfaces';

export const NewProjectForm: any = () => {
  const onSubmit = (values: ProjectValues) => {
    console.log(`${values}`);
  };
  const formValues = {
    projectTitle: '',
    weatherStation: '',
  };

  return <NewProjectFormComponent values={formValues} onSubmit={onSubmit} />;
};
