import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name :'user',
  initialState : { user: null, },
  reducers: {
    LogIn : (state,action) => {state.user = action.payload},
    Logout : (state) => {state.user = null},
  },
});

export const { LogIn , Logout } = userSlice.actions;

export const selectuser = state => state.user.user;
export default userSlice.reducer;
