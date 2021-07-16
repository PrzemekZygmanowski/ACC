import React, { FC, useState } from 'react';
import { NewProjectForm as NewProjectFormComponent } from '../components/NewProjectForm';
import { ProjectValues } from '../interfaces';
import { useDispatch } from 'react-redux';
import { setNewProject } from '../reducers/newProjectActions';

export const NewProjectForm: any = () => {
  const [projectData, setProjectData] = useState({
    projectTitle: '',
    weatherStation: '',
  });
  const dispatch = useDispatch();

  const onSubmit = (values: ProjectValues) => {
    dispatch(setNewProject(values.projectTitle, values.weatherStation));
    setProjectData({
      projectTitle: values.projectTitle,
      weatherStation: values.weatherStation,
    });
  };

  return <NewProjectFormComponent values={projectData} onSubmit={onSubmit} />;
};
