import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  isLogin: false,
};

export const mainSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.userInfo = {};
    },
  },
});

export const { login, logout } = mainSlice.actions;
export default mainSlice.reducer;
