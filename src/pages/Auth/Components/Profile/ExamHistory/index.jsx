import React from "react";

import Service from '../../../../../service/index';
import Handler from "../../../../../utils";
import "../index.scss";

const ExamHistory = () => {
    const { examHistory } = Service();
    const [histories, setExamHistory] = React.useState([]);
    const checkCall = React.useRef(false);
    const { formatDate } = Handler()
    const fetchHistory = async () => {
        if (!checkCall.current) {
            checkCall.current = true;
            const history = await examHistory();
            setExamHistory(history);
        }
    };

    React.useEffect(() => {
        fetchHistory();
    }, []);

    if (!Array.isArray(histories) || histories.length === 0) {
        return <h1>Your test result data is not available</h1>;
    }

    return (
        <div className="flex flex-col gap-4 py-8">
            <caption class="caption-top">
                <h1 className=" decoration-solid text-2xl font-semibold text-[#232f3e]">Exam History</h1>
            </caption>
            <table className="border-collapse border border-slate-500">
                <thead>
                    <tr>
                        <th className="border border-slate-600">Exam</th>
                        <th className="border border-slate-600">Date (Year/month/day)</th>
                        <th className="border border-slate-600">Time</th>
                        <th className="border border-slate-600">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {histories.map((exam, index) => (
                        <tr key={index} className="odd:bg-white even:bg-slate-50">
                            <td className="border border-slate-700 text-center ">{exam.name}</td>
                            <td className="border border-slate-700 text-center">{formatDate(exam.exam_date)}</td>
                            <td className="border border-slate-700 text-center">{exam.time}</td>
                            <td className="border border-slate-700 text-center">{exam.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default ExamHistory;