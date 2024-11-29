import PropTypes from "prop-types";
import React from "react";
import { useLocation } from "react-router-dom";

const ExamScore = () => {
    const { state } = useLocation();
    const totalPoint = state?.score;

    if (typeof totalPoint === "string") {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="text-2xl font-semibold text-gray-700">{totalPoint}</span>
            </div>
        );
    } else if (totalPoint <= 0.5) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="relative flex flex-col justify-center items-center h-40 w-40 bg-red-100 border-dashed border-4 border-red-500 rounded-full animate-pulse">
                    <h1 className="text-xl font-bold text-red-600">Score</h1>
                    <span className="text-3xl font-semibold text-red-600">{totalPoint}</span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="relative flex flex-col justify-center items-center h-40 w-40 bg-lime-100 border-dashed border-4 border-lime-500 rounded-full shadow-lg animate-bounce">
                    <h1 className="text-xl font-bold text-lime-600">Score</h1>
                    <span className="text-3xl font-semibold text-lime-600">{totalPoint}</span>
                </div>
            </div>
        );
    }
};

ExamScore.propTypes = {
    score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ExamScore;
