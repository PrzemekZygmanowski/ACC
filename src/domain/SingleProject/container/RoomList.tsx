import React from 'react';
import { RoomList as RoomListComponent } from '../components';
import { useSelector } from 'react-redux';
import { State } from '../../../interfaces';
import { RoomsT } from '../interfaces';

const RoomList = () => {
  const rooms = useSelector<State, RoomsT>((state: State) => state.rooms);

  return <RoomListComponent rooms={rooms.rooms} />;
};

export default RoomList;
