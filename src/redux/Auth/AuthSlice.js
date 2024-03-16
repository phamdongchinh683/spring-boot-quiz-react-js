import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    password: "",
    userNameSignUp: "",
    passWordSignUp: "",
    emailSignUp: "",
    telePhoneSignUp: "",
  },

  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setUsernameSignUp: (state, action) => {
      state.userNameSignUp = action.payload;
    },
    setPasswordSignUp: (state, action) => {
      state.passWordSignUp = action.payload;
    },
    setEmailSignUp: (state, action) => {
      state.emailSignUp = action.payload;
    },
    setTelephoneSignUp: (state, action) => {
      state.telePhoneSignUp = action.payload;
    },
  },
});

export const {
  setUsername,
  setPassword,
  setEmailSignUp,
  setTelephoneSignUp,
  setPasswordSignUp,
  setUsernameSignUp,
} = authSlice.actions;

export default authSlice.reducer;
