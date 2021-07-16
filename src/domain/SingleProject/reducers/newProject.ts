import { ProjectValues } from '../interfaces';
import { NEW_PROJECT } from './newProjectActions';
import { AnyAction } from 'redux';

const initialState = {
  id: '',
  projectTitle: '',
  weatherStation: '',
};

export default (
  state: ProjectValues = initialState,
  action: AnyAction
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
