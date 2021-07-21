import { AnyAction } from 'redux';
import { CURRENT_ROOM } from './currentRoomAction';

export interface CurrentRoom {
  id: string;
}
const initialState = {
  id: '',
};

export default (
  state: CurrentRoom = initialState,
  action: AnyAction
): CurrentRoom => {
  switch (action.type) {
    case CURRENT_ROOM: {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
