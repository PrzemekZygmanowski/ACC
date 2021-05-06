import { ProjectValues, NewProjectAction } from '../interfaces';
import { NEW_PROJECT } from './newProjectActions';

const initialState = {
  id: '',
  projectTitle: '',
  weatherStation: '',
};

export default (
  state: ProjectValues = initialState,
  action: NewProjectAction
): ProjectValues => {
  switch (action.type) {
    case NEW_PROJECT: {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
