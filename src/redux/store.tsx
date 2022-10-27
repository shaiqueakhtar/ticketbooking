import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import usersListReducer from './userSlice';

const store = configureStore({
  reducer: {
    row: userReducer,
    column: usersListReducer,
  },
});

export default store;
