import { Action } from 'redux';

export interface ProjectValues {
  projectTitle: string;
  weatherStation: string;
}

export interface NewProjectAction extends Action {
  payload: ProjectValues;
}
