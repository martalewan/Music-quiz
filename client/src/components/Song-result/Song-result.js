import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import EndGame from '../End-game/End-game';
import { saveAverageRoundTime } from '../../redux/actions';

const SongResult = ({
  correctAnswer, setNextSong, songPoints, gameOver, setGameOver, numberOfSongs,
}) => {
  const dispatch = useDispatch();
  const { userPoints } = useSelector(stats => stats);

  useEffect(() => {
    if (numberOfSongs === 0) {
      dispatch(saveAverageRoundTime(userPoints));
      return setGameOver(true);
    }
    return true;
  }, [numberOfSongs]);

  return (
  <article className='song-result'>
    { correctAnswer
      ? <>
        <p className='song-result__text emojis'>👏🏻👏🏻👏🏻</p>
        <p className='song-result__text'>Good job!</p>
        <p className='song-result__text'>Your answer was correct</p>
        <p className='song-result__title'>Your result is {songPoints} points</p>
      </>
      : <>
        <p className='song-result__text emojis'>💩</p>
        <p className='song-result__text'>Sorry!</p>
        <p className='song-result__text'>That was incorrect</p>
       </>
    }
     {!gameOver ? <Button
        className='login-form'
        type='submit'
        innerText='NEXT SONG'
        onClickFunc={setNextSong}
      />
       : <EndGame />}
      {/* {gameOver && <EndGame />} */}
  </article>
  );
};

export default SongResult;
