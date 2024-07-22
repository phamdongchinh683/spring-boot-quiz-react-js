import React from "react";
import ExamTimer from "../..";
import PropTypes from 'prop-types';

const ShowCounter = ({ hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <div className="countdown-exam">
                <ExamTimer value={hours} type={'Hours'} isDanger={false} />
                <span>:</span>
                <ExamTimer value={minutes} type={'Mins'} isDanger={false} />
                <span>:</span>
                <ExamTimer value={seconds} type={'Seconds'} isDanger={false} />
            </div>
        </div>
    );
};

ShowCounter.propTypes = {
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
}

export default ShowCounter;
