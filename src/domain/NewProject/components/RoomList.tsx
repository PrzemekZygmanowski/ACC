import React from 'react';
import Room from './Room';
import '../../../styles/styles.scss';

interface RoomsT {
  rooms: RoomT[];
}
interface RoomT {
  id: number;
  roomName: string;
  roomArea: number;
  roomTemperature: number;
}

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
