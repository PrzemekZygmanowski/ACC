import React, { FC, useState } from 'react';
import {
  NewProjectForm as NewProjectFormComponent,
  newProjectFormT,
} from '../components/NewProjectForm';
import { ProjectValues } from '../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

export const NewProjectForm: any = () => {
  const [projectData, setProjectData] = useState({
    projectTitle: '',
    weatherStation: '',
  });
  const dispatch = useDispatch();

  const onSubmit = (values: ProjectValues) => {
    console.log(values.projectTitle, values.weatherStation);
  };

  return <NewProjectFormComponent values={projectData} onSubmit={onSubmit} />;
};
