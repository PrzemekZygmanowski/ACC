import { NEW_ROOM } from './roomsActions';
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
        rooms: [...state.rooms, action.newRoom],
      };
    }
    default:
      return state;
  }
};
