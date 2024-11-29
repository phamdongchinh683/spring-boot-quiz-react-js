import { jwtDecode } from "jwt-decode";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import ExamFeature from '../../../../contexts/Hooks/ExamContext';
import Handler from "../../../../handler";
import useTokens from "../../../../jwt";
import { setQuestions, setResults } from "../../../../redux/Exam";
import Service from "../../../../service";

const TakeExam = () => {
    const { parseTime } = Handler();
    const { token } = useTokens();
    const { takeExam, submitResults } = Service();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { id } = useParams();
    const checkCall = useRef(false);
    const { questions, results } = useSelector((state) => state.exam);
    const [isSubmitted, setIsSubmitted] = useState(false);


    const getQuestion = async () => {
        if (!checkCall.current) {
            checkCall.current = true;
            const questionList = await takeExam(id);
            dispatch(setQuestions(questionList));
        }
    };

    const timeEnd = (param) => {
        let examTime = new Date().getTime() + parseTime(param);
        return examTime;
    };
    const timerEnd = timeEnd(state.timeAllowed);

    useEffect(() => {
        getQuestion();
    }, []);

    const chooseAnswer = (questionId, value) => {
        const normalizedValue = value.toLowerCase();
        const newResults = results.some((result) => result.questionId === questionId)
            ? results.map((result) =>
                result.questionId === questionId
                    ? { ...result, result: normalizedValue }
                    : result
            )
            : [
                ...results,
                {
                    id: questionId,
                    answer: normalizedValue,
                },
            ];

        dispatch(setResults(newResults));
    };

    const submitAnswers = async (e) => {
        if (e) {
            e.preventDefault();
        }
        if (isSubmitted) {
            return;
        }
        setIsSubmitted(true);

        try {
            const decoded = jwtDecode(token)
            const submit = await submitResults(results, id, decoded.sub);
            if (submit.status !== "success") {
                dispatch(setResults([]));
                navigate(`/exam/take_exam/${id}/score`, { state: { score: submit } });
            } else {
                dispatch(setResults([]));
                navigate(`/exam/take_exam/${id}/score`, { state: { score: submit.data } });
            }
        } catch (error) {
            console.log(error.response.data);
        }
    };

    if (!Array.isArray(questions) || questions.length === 0) {
        return <h1>Currently have not question this exam</h1>;
    }

    return (
        <ExamFeature>
            <ExamFeature.CountdownTimer targetDate={timerEnd} submitAnswer={submitAnswers} />
            <div className="flex flex-col items-center gap-4 pb-10">
                <h1 className="capitalize text-2xl">{state.test_name}</h1>
                <ExamFeature.ExamQuestion questions={questions} handleFunction={chooseAnswer} />
                <button className={"rounded-none px-4 py-2 font-semibold text-sm bg-sky-500 text-white shadow-sm"} onClick={submitAnswers}>Submit</button>
            </div>
        </ExamFeature>
    );
};

export default TakeExam;
