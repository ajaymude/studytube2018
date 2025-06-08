import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  isLoading: false,
  error:false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
    },
    signOut: (state, action) => {
      state.userInfo = null;
      state.isLoading = false;
      state.error = false;
    },
  },
});

export const { setCredentials, signOut } = authSlice.actions;

export default authSlice.reducer;