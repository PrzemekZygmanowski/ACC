import React from 'react';
import { RoomList as RoomListComponent } from '../components';
import { useSelector } from 'react-redux';
import { State } from '../../../interfaces';
import { RoomsT, RoomT } from '../interfaces';

// const rooms = [
//   { id: '1', roomName: 'kuchnia', roomArea: 5, roomTemperature: 24 },
//   { id: '2', roomName: 'salon', roomArea: 15, roomTemperature: 24 },
//   { id: '3', roomName: 'sypialnia', roomArea: 10, roomTemperature: 24 },
// ];

const RoomList = () => {
  const rooms = useSelector<State, RoomsT>((state: State) => state.rooms);

  return <RoomListComponent rooms={rooms.rooms} />;
};

export default RoomList;
