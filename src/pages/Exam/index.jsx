import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Service from "../../service/index";
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
        <div className="exam-page px-8 py-4">
            <h2 className="text-3xl font-semibold mb-6 text-center">Exams</h2>
            <div className="exam-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {exams.map((exam, index) => (
                    <div
                        key={index}
                        className="exam-card border-2 border-gray-300 shadow-md rounded-lg p-4 bg-white hover:shadow-lg transition duration-300 transform hover:-translate-y-2 cursor-pointer"
                        onClick={() => examInfo(exam)}
                    >
                        <h1 className="text-xl font-bold mb-2">{exam.nameExam}</h1>
                        <p className="text-gray-700">Time: {exam.timeAllowed}</p>
                        <p className="text-gray-700">Quantity: {exam.questionQuantity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exam;
