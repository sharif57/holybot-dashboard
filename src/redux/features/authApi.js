import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isLoading: true,
};
const authApi = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLoading = false;
    },
    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.socket = null;
    },
  },
});

export const { setLogin, setUser, logout } =
authApi.actions;
export default authApi.reducer;
