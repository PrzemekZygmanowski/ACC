import { NewProjectAction } from '../interfaces';

export const NEW_PROJECT = 'NEW_PROJECT';

export const setNewProject = (
  projectTitle: string,
  weatherStation: string
): NewProjectAction => {
  return {
    type: NEW_PROJECT,
    payload: {
      projectTitle: projectTitle || '',
      weatherStation: weatherStation || '',
    },
  };
};
