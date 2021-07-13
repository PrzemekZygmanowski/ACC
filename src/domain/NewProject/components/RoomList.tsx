import React from 'react';
import Room from './Room';
import '../../../styles/styles.scss';
import { RoomsT, RoomT } from '../interfaces';

const RoomList = ({ rooms }: RoomsT) => {
  return (
    <ul className='rooms'>
      {rooms.map((room: RoomT) => {
        return (
          <Room
            id={room.id}
            name={room.roomName}
            area={room.roomArea}
            temperature={room.roomTemperature}
          />
        );
      })}
    </ul>
  );
};

export default RoomList;
