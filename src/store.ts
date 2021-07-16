import { configureStore } from '@reduxjs/toolkit';
import newProjectReducer from './domain/SingleProject/reducers/newProject';
import roomsReducer from './domain/SingleProject/reducers/rooms';

const store = configureStore({
  reducer: {
    newProject: newProjectReducer,
    rooms: roomsReducer,
  },
});

export default store;
