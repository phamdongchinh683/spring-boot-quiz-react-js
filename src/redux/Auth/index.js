import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    password: "",
    newPassword: "",
    phoneNumber: "",
    email: "",
    firstName: "",
    lastName: "",
    age: "",
    city: "",
    image: "",
    address: "",
    response: "",
    birthday: "",
    gender: "",
    error: false,
  },

  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setResponseMessage: (state, action) => {
      state.response = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setNewPassword: (state, action) => {
      state.newPassword = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setBirthDay: (state, action) => {
      state.birthday = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setPublicIdImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const {
  setUsername,
  setPassword,
  setAge,
  setCity,
  setEmail,
  setAddress,
  setFirstName,
  setLastName,
  setNewPassword,
  setPhoneNumber,
  setPublicIdImage,
  setErrorMessage,
  setGender,
  setBirthDay,
  setResponseMessage,
} = authSlice.actions;

export default authSlice.reducer;
