import React, { useRef, useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setQuestions, setResults } from "../../../../redux/Exam";
import Service from "../../../../service";
import Input from '../../../../components/Forms/Input';
import ExamFeature from '../../../../contexts/Hooks/ExamContext';
import Handler from "../../../../handler";

const TakeExam = () => {
    const { formatDate, parseTime, formatTime } = Handler();
    const { takeExam, submitResults } = Service();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { id } = useParams();
    const checkCall = useRef(false);
    const { questions, results } = useSelector((state) => state.exam);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const startTime = Date.now();

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
    const timerEnd = timeEnd(state.time_allowed);

    useEffect(() => {
        getQuestion();
    }, []);

    const chooseAnswer = (questionId, value) => {
        const newResults = results.some(result => result.questionId === questionId)
            ? results.map(result =>
                result.questionId === questionId
                    ? { ...result, result: value }
                    : result
            )
            : [
                ...results,
                {
                    questionId: questionId,
                    result: value,
                    examDate: formatDate(new Date()),
                }
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
            let totalTakeExam = Date.now() - startTime;
            let examTime = formatTime(totalTakeExam);

            const submit = await submitResults({ results, examTime, examDate: formatDate(new Date()) }, id);
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
