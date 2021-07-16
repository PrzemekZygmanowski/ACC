import { Action } from 'redux';

export interface ProjectValues {
  projectTitle: string;
  weatherStation: string;
}

export interface NewProjectAction extends Action {
  payload: ProjectValues;
}

export interface RoomsT {
  rooms: RoomT[];
}
export interface RoomT {
  id: string;
  roomName: string;
  roomArea: number;
  roomTemperature: number;
}

export interface roomAction extends Action {
  payload: RoomT;
}
