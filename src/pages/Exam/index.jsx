import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Service from '../../service/index';
import "../Exam/index.scss";

const Exam = () => {
    const navigate = useNavigate();
    const { examList } = Service();
    const [exams, setExams] = useState([]);
    const checkCall = useRef(false);

    const fetchExams = async () => {
        if (!checkCall.current) {
            checkCall.current = true;
            const getExams = await examList();
            setExams(getExams);
        }
    };

    useEffect(() => {
        fetchExams();
    }, []);

    const examInfo = (exam) => {
        navigate(`/exam/${exam.id}`, { state: { exam } });
    };

    return (
        <>
            <h2 className="font-semibold">Exams</h2>
            <div className="flex justify-stretch items-center px-8 gap-4">
                {exams.map((exam, index) => (
                    <div key={index} className="border-4" onClick={() => examInfo(exam)}>
                        <h1>Title: {exam.test_name}</h1>
                        <h1>Language: {exam.language_name}</h1>
                        <p>Time: {exam.time_allowed}</p>
                        <p>Quantity: {exam.question_quantity}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Exam;
