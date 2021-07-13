import React, { useState } from 'react';
import { NewRoomForm as NewRoomFormComponent } from '../components/NewRoomForm';
import { useDispatch } from 'react-redux';
import { addNewRoom } from '../reducers/roomsActions';
import { RoomT } from '../interfaces';

export const NewRoomForm = () => {
  const [roomData, setRoomData] = useState({
    id: 0,
    roomName: '',
    roomArea: 0,
    roomTemperature: 0,
  });
  const dispatch = useDispatch();

  const submitNewRoom = (values: RoomT) => {
    console.log(values);

    dispatch(
      addNewRoom(
        values.id,
        values.roomName,
        values.roomArea,
        values.roomTemperature
      )
    );
    setRoomData({
      id: values.id,
      roomName: values.roomName,
      roomArea: values.roomArea,
      roomTemperature: values.roomTemperature,
    });
  };
  return (
    <NewRoomFormComponent values={roomData} submitNewRoom={submitNewRoom} />
  );
};
