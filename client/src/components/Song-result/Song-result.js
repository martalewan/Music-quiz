import Button from '../Button/Button';

const SongResult = ({ correctAnswer, setNextSong, songPoints }) => (
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
      <Button
        className='login-form'
        type='submit'
        innerText='NEXT SONG'
        onClickFunc={setNextSong}
      />
  </article>
);

export default SongResult;
