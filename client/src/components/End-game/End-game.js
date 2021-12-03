import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const EndGame = () => {
  const { userPoints } = useSelector(state => state);
  return (
  <article className='game-result'>
      <h2>Your total score is {userPoints}</h2>
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
