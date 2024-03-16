import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Auth/AuthSlice";
import emailReducer from "../Email/EmailSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    email: emailReducer,
  },
});

export default store;
