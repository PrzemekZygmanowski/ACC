import React from 'react';
import { Module } from '../../interfaces';
import newProject from './reducers/newProject';
import rooms from './reducers/rooms';
import currentRoom from './reducers/currentRoom';

const NEW_PROJECT_MODULE: Module = {
  reducers: {
    newProject,
    rooms,
    currentRoom,
  },
};
export default NEW_PROJECT_MODULE;
