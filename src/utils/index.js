import { useState, useEffect, useRef } from "react";

function Handler() {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    return date.toISOString().split("T")[0];
  };

  const parseAnswer = (param) => {
    const answerList = param.split(",");
    const variables = {};
    answerList.forEach((element, index) => {
      const variableName = String.fromCharCode(97 + index);
      variables[variableName] = element;
    });
    return variables;
  };

  const parseTime = (param) => {
    const [hours, minutes, seconds] = param.split(":").map(Number);
    return hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;
  };

  const formatTime = (param) => {
    let totalSeconds = Math.floor(param / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  const getReturnValues = (countDown) => {
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    return [hours, minutes, seconds];
  };

  const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);

      return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
  };

  return {
    formatDate,
    parseAnswer,
    formatTime,
    useCountdown,
    parseTime,
  };
}

export default Handler;
