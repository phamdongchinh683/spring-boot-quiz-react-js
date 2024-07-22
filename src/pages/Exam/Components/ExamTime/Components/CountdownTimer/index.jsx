import React, { useEffect, useRef, useState } from 'react';
import ExpiredNotice from '../ExpiredNotice/';
import ShowCounter from '../ShowCounter';
import PropTypes from 'prop-types';
import Handler from '../../../../../../handler';

const CountdownTimer = ({ targetDate, submitAnswer }) => {
    const { useCountdown } = Handler();
    const [hours, minutes, seconds] = useCountdown(targetDate);
    const hasSubmitted = useRef(false);
    const [timeExpired, setTimeExpired] = useState(false);

    useEffect(() => {
        if (hours + minutes + seconds <= 0 && !hasSubmitted.current) {
            hasSubmitted.current = true;
            setTimeExpired(true); 
            setTimeout(() => {
                submitAnswer(); 
            }, 1000);
        }
    }, [hours, minutes, seconds, submitAnswer]);

    if (timeExpired) {
        return <ExpiredNotice />;
    }

    return (
        <ShowCounter
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
    );
};

CountdownTimer.propTypes = {
    targetDate: PropTypes.number.isRequired,
    submitAnswer: PropTypes.func.isRequired
};

export default CountdownTimer;
