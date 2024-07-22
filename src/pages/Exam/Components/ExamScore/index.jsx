import React from "react";
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import "../../index.scss"

const ExamScore = () => {
    const { state } = useLocation();
    const totalPoint = state?.score;

    if (typeof totalPoint === "string") {
        return <span>{totalPoint}</span>;
    } else if (totalPoint <= 0.5) {
        return (
            <div className="relative h-32 w-32">
                <div className="flex flex-col justify-center items-center absolute inset-0 border-dashed border-2 border-red-500">
                    <h1>Score</h1>
                    <span>{totalPoint}</span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col justify-center items-center border-dashed border-2 border-lime-500">
                <h1>Score</h1>
                <span>{totalPoint}</span>
            </div>
        )
    }
}

ExamScore.propTypes = {
    score: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ExamScore;
