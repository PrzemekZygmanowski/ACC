import { roomAction } from '../interfaces';

export const NEW_ROOM = 'NEW_ROOM';
export const DELETE_ROOM = 'DELETE_ROOM';

export const addNewRoom = (
  id: string,
  roomName: string,
  roomArea: number,
  roomTemperature: number
): roomAction => {
  return {
    type: NEW_ROOM,
    payload: {
      id: id,
      roomName: roomName,
      roomArea: roomArea,
      roomTemperature: roomTemperature,
    },
  };
};

export const deleteRoom = (id: string) => {
  return {
    type: DELETE_ROOM,
    payload: id,
  };
};
