import React from 'react';
import { Module } from '../../interfaces';
import newProject from './reducers/newProject';

const NEW_PROJECT_MODULE: Module = {
  reducers: {
    newProject,
  },
};
export default NEW_PROJECT_MODULE;
