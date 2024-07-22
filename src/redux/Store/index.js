import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Auth";
import examReducer from "../Exam";

const store = configureStore({
  reducer: {
    auth: authReducer,
    exam: examReducer,
  },
});

export default store;
