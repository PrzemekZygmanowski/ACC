///////////////////404-NOT FOUND//////////////////
// export { default as NotFound } from './NotFound/NotFound';

import { Module } from '../interfaces';
import newProject from './SingleProject/index';
import rooms from './SingleProject/index';

export const modules: Module[] = [newProject, rooms];
