///////////////////START-PROJECT//////////////////
export { default as NewProject } from './NewProject/pages/NewProject';
///////////////////404-NOT FOUND//////////////////
export { default as NotFound } from './NotFound/NotFound';

import { Module } from '../interfaces';
import newProject from './NewProject/index';
import rooms from './NewProject/index';

export const modules: Module[] = [newProject, rooms];
