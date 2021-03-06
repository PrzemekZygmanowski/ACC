import { roomAction } from '../interfaces';

export const NEW_ROOM = 'NEW_ROOM';

export const addNewRoom = (
  id: number,
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
