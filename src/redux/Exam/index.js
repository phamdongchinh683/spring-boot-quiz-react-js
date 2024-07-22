import { createSlice } from "@reduxjs/toolkit";

const examSlice = createSlice({
  name: "exam",
  initialState: {
    response: "",
    error: false,
    questions: [],
    results: [],
  },

  reducers: {
    setResponseMessage: (state, action) => {
      state.response = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setQuestions, setResults, setErrorMessage, setResponseMessage } =
  examSlice.actions;

export default examSlice.reducer;
