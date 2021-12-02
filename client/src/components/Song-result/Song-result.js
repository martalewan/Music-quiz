import Button from '../Button/Button';

const SongResult = ({ correctAnswer, setNextSong, songPoints }) => (
  <article className='song-result'>
    { correctAnswer
      ? <>
        <p className='song-result__text'>Good job! Your answer was correct 👏🏻👏🏻👏🏻</p>
        <p className='song-result__title'>Your result is {songPoints} points</p>
      </>
      : <p className='song-result__text'>Sorry! That was incorrect 💩</p>
    }
      <Button
        className='login-form'
        type='submit'
        innerText='NEXT SONG'
        onClickFunc={setNextSong}
      />
  </article>
);

export default SongResult;
