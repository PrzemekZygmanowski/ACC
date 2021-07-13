// import { createStore } from 'redux';
// import rootReducer from './reducers';
// import { devToolsEnhancer } from 'redux-devtools-extension';

// export default createStore(rootReducer, devToolsEnhancer({}));
import { configureStore } from '@reduxjs/toolkit';
import newProjectReducer from './domain/NewProject/reducers/newProject';
import roomsReducer from './domain/NewProject/reducers/rooms';

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    newProject: newProjectReducer,
    rooms: roomsReducer,
  },
});

export default store;
