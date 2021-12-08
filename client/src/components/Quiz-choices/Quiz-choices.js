import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonChoice from '../Button-choice/Button-choice';
import TimerComponent from '../Timer/Timer';
import { setUserPoints, setAnswered } from '../../redux/actions';

const QuizChoices = ({
  setCorrectAnswer, setSongPoints, songPoints,
  setNumberOfSongs, isPlaying,
}) => {
  const { gameConfig, gameData } = useSelector(state => state);
  const { songChoices } = gameData;
  const dispatch = useDispatch();

  useEffect(() => {
    setSongPoints(gameConfig.gamePoints);
  }, [gameData.currentSong]);

  const handleAnswer = e => {
    setNumberOfSongs(songs => songs - 1);
    if (!e) {
      setCorrectAnswer(false);
      return dispatch(setAnswered(true));
    }
    if (e.target.value === gameData.currentSong) {
      setCorrectAnswer(true);
      dispatch(setUserPoints(songPoints));
      return dispatch(setAnswered(true));
    }
    setCorrectAnswer(false);
    return dispatch(setAnswered(true));
  };

  const userChoice = e => {
    if (!e) {
      return handleAnswer();
    }
    e.preventDefault();
    return handleAnswer(e);
  };

  return (
    <article className='quiz__choices'>
      <TimerComponent
        time={gameConfig.songTimer}
        timerAction={userChoice}
        setSongPoints={setSongPoints}
        isPlaying={isPlaying}
      />
      {songChoices
        && songChoices.map((song, index) => (
          <ButtonChoice
            key={index}
            song={song}
            className='quiz'
            onClickFunc={userChoice}
          />
        ))
      }
    </article>
  );
};

export default QuizChoices;
