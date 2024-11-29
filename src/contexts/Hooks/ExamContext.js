import React, { useReducer } from "react";

import { ExamContext } from "../index";
import ExamInfo from "../../pages/Exam/Components/ExamInfo/index";
import ExamQuestion from "../../pages/Exam/Components/ExamQuestion/index";
import CountdownTimer from "../../pages/Exam/Components/ExamTime/Components/CountdownTimer/index";
import ExamScore from "../../pages/Exam/Components/ExamScore/index";

const ExamFeature = (props) => {
  const initialState = {
    isLoggedIn: false,
    error: false,
    hide: true,
  };

  const examReducer = (state, action) => {
    switch (action.type) {
      case "error":
        return {
          ...state,
          error: action.payload,
        };
      case "show":
        return {
          ...state,
          isLoggedIn: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatchExam] = useReducer(examReducer, initialState);

  return (
    <ExamContext.Provider value={[state, dispatchExam]}>
      {props.children}
    </ExamContext.Provider>
  );
};

ExamFeature.ExamInfo = ExamInfo;
ExamFeature.ExamQuestion = ExamQuestion;
ExamFeature.CountdownTimer = CountdownTimer;
ExamFeature.ExamResult = ExamScore;

export default ExamFeature;
