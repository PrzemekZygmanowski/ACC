import React, { useState } from 'react';
import { NewRoomForm as NewRoomFormComponent } from '../components/NewRoomForm';
import { useDispatch } from 'react-redux';
import { addNewRoom } from '../reducers/roomsActions';
import { RoomT } from '../interfaces';
import { v4 as uuid4v } from 'uuid';

export const NewRoomForm = () => {
  const [roomData, setRoomData] = useState({
    id: '',
    roomName: '',
    roomArea: 0,
    roomTemperature: 0,
  });
  const dispatch = useDispatch();

  const submitNewRoom = (values: RoomT) => {
    const roomId = uuid4v().slice(0, 3);

    dispatch(
      addNewRoom(
        roomId,
        values.roomName,
        values.roomArea,
        values.roomTemperature
      )
    );
    setRoomData({
      id: roomId,
      roomName: values.roomName,
      roomArea: values.roomArea,
      roomTemperature: values.roomTemperature,
    });
  };
  return (
    <NewRoomFormComponent values={roomData} submitNewRoom={submitNewRoom} />
  );
};
