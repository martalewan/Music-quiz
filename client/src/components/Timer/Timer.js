import { useState, useEffect } from 'react';

const TimerComponent = ({
  time, timerAction, setSongPoints, isPlaying,
}) => {
  const [timer, setTimer] = useState(time);

  console.log(isPlaying);

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

  return (<h1 className='song-timer'>{timer}</h1>);
};

export default TimerComponent;
