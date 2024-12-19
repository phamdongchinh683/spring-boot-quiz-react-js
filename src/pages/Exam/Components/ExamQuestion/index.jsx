import PropTypes from "prop-types";
import React from "react";

import Input from "../../../../components/forms/Input";
import "../../../../pages/Exam/index.scss";
import handler from "../../../../utils/index";

const ExamQuestion = ({ questions, handleFunction, results }) => {
    const { parseAnswer } = handler();
    return (
        <div className="rounded-md border border-[#ebebeb] shadow-xl mt-2 pt-1">
            {questions.map((question, index) => {
                const parsedAnswers = parseAnswer(question.answerList);
                return (
                    <div key={question.id} className="grid grid-rows-1 gap-1 py-2">
                        <div className="flex px-8">
                            <h1>{index + 1}.</h1>
                            <span className="text-slate-500 ml-2">{question.questionContent}</span>
                        </div>
                        <div className="grid grid-rows-1 gap-3 ml-14">
                            {Object.entries(parsedAnswers).map(([key, value]) => (
                                <div key={key} className="flex items-center gap-2">
                                    <Input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        onChange={() =>
                                            handleFunction(question.id, key.toLowerCase())
                                        }
                                        className="cursor-pointer"
                                    />
                                    <span>{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
            <svg className="animate-bounce w-6 h-6 ..." />
        </div>
    );
};

ExamQuestion.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            questionContent: PropTypes.string.isRequired,
            answerList: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleFunction: PropTypes.func.isRequired,
    results: PropTypes.arrayOf(
        PropTypes.shape({
            questionId: PropTypes.string.isRequired,
            result: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ExamQuestion;
