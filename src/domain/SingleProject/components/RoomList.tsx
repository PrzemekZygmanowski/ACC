import React from 'react';
import Room from './Room';
import '../../../styles/styles.scss';
import { RoomsT, RoomT } from '../interfaces';

const RoomList = ({ rooms }: RoomsT) => {
  console.log(rooms);

  return (
    <ul className='rooms'>
      {rooms &&
        rooms.map((room: RoomT) => {
          return (
            <Room
              key={room.id}
              id={room.id.slice(0, 3)}
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
