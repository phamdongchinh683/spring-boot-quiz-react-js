import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Input from "../../../../components/forms/Input";
import "../../../Exam/index.scss";

const ExamInfo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { state } = useLocation();
    const exam = state?.exam;

    if (!exam) {
        return (
            <div className="exam-info">
                <h1 className="text-2xl font-semibold text-center mt-8">Loading Exam Info...</h1>
            </div>
        );
    }

    const takeExam = (id) => {
        navigate(`/exam/take_exam/${id}`, { state: exam });
    };

    return (
        <div className="exam-info p-8">
            <div className="container mx-auto max-w-2xl border rounded-lg shadow-lg p-6 bg-white">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Exam Details</h1>
                <div className="exam-detail space-y-4">
                    <div className="detail-item">
                        <h2 className="text-xl font-semibold">Title:</h2>
                        <p className="text-gray-700">{exam.nameExam}</p>
                    </div>
                    <div className="detail-item">
                        <h2 className="text-xl font-semibold">Time Allowed:</h2>
                        <p className="text-gray-700">{exam.timeAllowed}</p>
                    </div>
                    <div className="detail-item">
                        <h2 className="text-xl font-semibold">Question Quantity:</h2>
                        <p className="text-gray-700">{exam.questionQuantity}</p>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <Input
                        type="button"
                        value="Take Test"
                        onClick={() => takeExam(id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    />
                </div>
            </div>
        </div>
    );
};

export default ExamInfo;
