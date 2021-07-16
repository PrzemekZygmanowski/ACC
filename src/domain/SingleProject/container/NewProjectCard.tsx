import React from 'react';
import { NewProjectCard as NewProjectCardComponent } from '../components/NewProjectCard';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../interfaces';
import { ProjectValues } from '../interfaces';
import { Button } from '../../../commons';
import { setNewProject } from '../reducers/newProjectActions';

export const NewProjectCard = () => {
  const dispatch = useDispatch();
  const newProject = useSelector<State, ProjectValues>(
    (state) => state.newProject
  );
  const handleModify = () => {
    dispatch(setNewProject('', ''));
  };

  return (
    <>
      {' '}
      <NewProjectCardComponent
        projectTitle={newProject.projectTitle}
        weatherStation={newProject.weatherStation}
      />
      <Button className='mainBtn' label='Zmień dane' onClick={handleModify} />
    </>
  );
};
