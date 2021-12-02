import { useState, useEffect } from 'react';

const TimerComponent = ({ time, timerAction, setSongPoints }) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(counter => counter - 1);
      if (setSongPoints) {
        setSongPoints(points => points - 100);
      }
    }, 1000);

    const timeout = setTimeout(() => {
      timerAction(false);
    }, timer * 1000);

    return () => {
      clearInterval(countdown);
      clearTimeout(timeout);
    };
  }, []);

  return (<h1>{timer}</h1>);
};

export default TimerComponent;
