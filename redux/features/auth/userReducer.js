import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({ token: null }, (builder) => {
  //login cases
  builder.addCase("loginRequest", (state, action) => {
    state.loading = true;
  });
  builder.addCase("loginSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
    state.isAuth = true;
    state.token = action.payload.token;
  });
  builder.addCase("loginFail", (state, action) => {
    state.loading = false;
    state.isAuth = false;
    state.error = action.payload;
  });
  //error case
  builder.addCase("clearError", (state) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });

  //user registration
  builder.addCase("userRegisterRequest", (state, action) => {
    state.loading = true;
  });
  builder.addCase("userRegisterSuccess", (state, action) => {
    state.loading = false;
    state.isAuth = true;
    state.message = action.payload;
  });
  builder.addCase("userRegisterFail", (state, action) => {
    state.isAuth = false;
    state.error = action.payload;
  });

  //user data get
  builder.addCase("userDataGetRequest", (state, action) => {
    state.loading = true;
  });
  builder.addCase("userDataGetSuccess", (state, action) => {
    state.loading = false;
    state.isAuth = true;
    state.user = action.payload;
  });
  builder.addCase("userDataGetFail", (state, action) => {
    state.loading = false;
    state.isAuth = false;
    state.error = action.payload;
  });

  //logout functionality
  builder.addCase("userLogoutRequest", (state, action) => {
    state.loading = true;
  });
  builder.addCase("userLogoutSuccess", (state, action) => {
    state.loading = false;
    state.isAuth = false;
    state.user = null;
    state.message = action.payload;
  });
  builder.addCase("userLogoutFail", (state, action) => {
    // state.loading = false;
    state.isAuth = false;
    state.error = action.payload;
  });
});
