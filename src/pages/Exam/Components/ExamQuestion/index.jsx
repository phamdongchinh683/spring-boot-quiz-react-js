import React from "react";
import PropTypes from 'prop-types';

import handler from '../../../../handler/index';
import Input from '../../../../components/Forms/Input';
import "../../../../pages/Exam/index.scss";

const ExamQuestion = ({ questions, handleFunction }) => {
    const { parseAnswer } = handler();

    return (
        <div className="rounded-md border border-[#ebebeb] shadow-xl mt-2 pt-1">
            {questions.map((question, index) => {
                const parsedAnswers = parseAnswer(question.answer_list);
                return (
                    <div key={question.id} className="grid grid-rows-1 gap-1 py-2">
                        <div className="flex px-8">
                            <h1>{index + 1}.</h1>
                            <span className="text-slate-500 ml-2">{question.question_content}</span>
                        </div>
                        <div className="grid grid-rows-1 gap-3 ml-14">
                            {Object.entries(parsedAnswers).map(([key, value]) => (
                                <div key={key} className="flex items-center gap-2">
                                    <Input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        onClick={() => handleFunction(question.id, key.toLowerCase())}
                                        className={"cursor-pointer"}
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
            question_content: PropTypes.string.isRequired,
            answer_list: PropTypes.string.isRequired
        })
    ).isRequired,
    handleFunction: PropTypes.func.isRequired,
};

export default ExamQuestion;
