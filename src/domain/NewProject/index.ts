import React from 'react';
import { Module } from '../../interfaces';
import newProject from './reducers/newProject';
import rooms from './reducers/rooms';

const NEW_PROJECT_MODULE: Module = {
  reducers: {
    newProject,
    rooms,
  },
};
export default NEW_PROJECT_MODULE;
