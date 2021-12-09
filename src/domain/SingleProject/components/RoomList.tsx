import React from 'react';
import {Room} from './Room';
import '../../../styles/styles.scss';
import { RoomsT, RoomT } from '../interfaces';

const RoomList = ({ rooms }: RoomsT) => {
  const areaFormat = (area: number) => {
    return `${area}m kw.`;
  };

  const tempFormat = (temp: number) => {
    return `${temp}°C`;
  };
  console.log(rooms);

  return (
    <ul className='rooms'>
      {rooms &&
        rooms.map((room: RoomT) => {
          return (
            <Room
              key={room.id}
              id={room.id}
              name={room.roomName}
              area={areaFormat(room.roomArea)}
              temperature={tempFormat(room.roomTemperature)}
            />
          );
        })}
    </ul>
  );
};

export default RoomList;
