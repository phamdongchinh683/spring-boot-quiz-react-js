import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../../../Exam/index.scss";
import Input from "../../../../components/Forms/Input";

const ExamInfo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { state } = useLocation();
    const exam = state?.exam;

    if (!exam) {
        return <div>Loading...</div>;
    }

    const takeExam = (id) => {
        navigate(`/exam/take_exam/${id}`, { state: exam });
    };

    return (
        <div className="exam-info">
            <h1>Exam Info</h1>
            <div className="exam-detail">
                <h2>Title: {exam.test_name}</h2>
                <h2>Language: {exam.language_name}</h2>
                <p>Audio: {exam.audio}</p>
                <p>Time Allowed: {exam.time_allowed}</p>
                <p>Question Quantity: {exam.question_quantity}</p>
                <Input type={"button"} value={"Take Test"} onClick={() => takeExam(id)}></Input>
            </div>
        </div>
    );
};

export default ExamInfo;
