import React from "react";
import PropTypes from 'prop-types';
import "../ExamTime/index.scss";
const ExamTimer = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};

ExamTimer.propTypes = {
    value: PropTypes.number,
    type: PropTypes.string,
    isDanger: PropTypes.bool
}

export default ExamTimer;



