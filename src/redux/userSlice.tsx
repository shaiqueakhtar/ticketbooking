import {createSlice} from '@reduxjs/toolkit';

export const STATUS = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const usersList = createSlice({
  name: 'seats',
  initialState: {
    data: [],
    selected: false,
  },
  reducers: {
    setSeats(state, action) {
      state.data = action.payload;
    },
  },
});

export const {setSeats} = usersList.actions;

export default usersList.reducer;

// Thunks
// export function fetchUsers(number) {
//   return async function fetchUsersThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const response = await usersMain.getUsers(number);
//       dispatch(setUsers(response.data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (error) {
//       console.log(error.message);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }
