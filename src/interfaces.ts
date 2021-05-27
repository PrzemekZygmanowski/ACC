import React, { Reducer } from 'react';
import { ProjectValues } from './domain/NewProject/interfaces';

export interface Module {
  // the "named" reducer: example: {domain: (state:State = initialState, action:Action):State=>{...}}
  reducers?: { [key: string]: Reducer<any, any> }; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface State {
  newProject: ProjectValues;
}
