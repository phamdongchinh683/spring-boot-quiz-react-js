import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "email",
  initialState: {
    inputEmail: "",
  },

  reducers: {
    setInputEmail: (state, action) => {
      state.inputEmail = action.payload;
    },
  },
});

export const { setInputEmail } = emailSlice.actions;

export default emailSlice.reducer;
