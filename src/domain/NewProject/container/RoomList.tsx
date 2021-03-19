import React from 'react';
import RoomList from '../components/RoomList';

const rooms = [
  { id: 1, roomName: 'kuchnia', roomArea: 5, roomTemperature: 24 },
  { id: 2, roomName: 'salon', roomArea: 15, roomTemperature: 24 },
  { id: 3, roomName: 'sypialnia', roomArea: 10, roomTemperature: 24 },
];

const RoomList = () => {
  return <RoomList rooms={rooms} />;
};

export default RoomList;
