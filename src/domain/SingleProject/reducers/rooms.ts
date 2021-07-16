import { NEW_ROOM, DELETE_ROOM } from './roomsActions';
import { AnyAction } from 'redux';
import { RoomsT } from '../interfaces';

const initialState = {
  rooms: [],
};

export default (state: RoomsT = initialState, action: AnyAction): RoomsT => {
  switch (action.type) {
    case NEW_ROOM: {
      return {
        ...state,
        rooms: [...state.rooms, action.payload],
      };
    }
    case DELETE_ROOM: {
      return {
        rooms: [...state.rooms.filter((room) => room.id !== action.payload)],
      };
    }
    default:
      return state;
  }
};
