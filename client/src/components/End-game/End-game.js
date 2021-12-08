import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { postGameStats } from '../../game-logic/stats-logic';
import { resetGameRound } from '../../redux/actions';

const EndGame = () => {
  const { userPoints, gameStats, currentUser } = useSelector(state => state);
  const dispatch = useDispatch();
  const highScoresData = {
    ...gameStats,
    username: currentUser.username,
  };

  useEffect(() => {
    postGameStats(highScoresData, '/api/users/stats/high-scores');
    postGameStats(highScoresData, '/api/users/stats');
    dispatch(resetGameRound());
  }, []);

  return (
  <article className='game-result'>
      <h2>Your total score is {userPoints}</h2>
      <Link className='link' to='/leaderboard'>
        <Button
          className='leaderboard'
          innerText='LEADERBOARD'
        />
      </Link>
      <Link className='link' to='/' >
        <Button
          className='game-result__exit'
          type='submit'
          innerText='EXIT QUIZ'
        />
      </Link>
  </article>
  );
};

export default EndGame;
