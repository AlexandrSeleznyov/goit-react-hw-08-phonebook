import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  getIsFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    // [authOperations.logIn.fulfilled](state, action) {
    [authOperations.logIn.fulfilled](state, { payload }) {
      // state.user = action.payload.user;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.getIsFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.getIsFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.getIsFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
