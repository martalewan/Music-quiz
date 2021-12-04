import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Instructions = () => {
  const { gameConfig } = useSelector(state => state);

  return (
  <section className='instruction-wrapper'>
    <h2 className='instruction-wrapper__title'>HOW TO PLAY?</h2>
    <p className='instruction-description--title'>
    Welcome to our music quiz!
    </p>
    <p className='instruction-description'>
      Music Quiz’ is a fun single-player game
      where you can test you music knowledge!
    </p>
    <p className='instruction-description'>
      Start the game by pressing the "Start" button.
    </p>
    <p className='instruction-description'>
      A 3 second countdown will then start. After the countdown, the actual gameplay begins,
      so be ready!
      You got 15 seconds to make your guess, with multiple choices.
      There is ONLY one correct answer.
    </p>
    <p className='instruction-description'>
      The point system is time based. The faster you get the correct answer,
      the more points you will recieve.
      Be aware, wrong answers will award NO points.
    </p>
    <p className='instruction-description'>
      Each game consists of {gameConfig.songNumber} rounds.
      After each game your total score will be displayed
      and saved to the leaderboard.
    </p>
    <p className='instruction-description--last'>
      Good luck and have fun!
    </p>
    <Link className='link' to='/quiz'>
      <Button
        className='start-game'
        innerText='START'
      />
    </Link>
  </section>
  );
};

export default Instructions;
