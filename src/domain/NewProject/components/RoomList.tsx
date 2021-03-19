import React from 'react';

interface RoomsT {
  id: number;
  name: string;
  area: number;
  temperature: number;
}
const RoomList = ({ rooms }: RoomsT) => {
  return <ul></ul>;
};

export default RoomList;
