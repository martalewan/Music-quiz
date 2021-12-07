import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonChoice from '../Button-choice/Button-choice';
import TimerComponent from '../Timer/Timer';
import { setUserPoints } from '../../redux/actions';

const QuizChoices = ({
  setAnswered, setCorrectAnswer, setSongPoints, songPoints,
  setNumberOfSongs, isPlaying,
}) => {
  const [songChoices] = useState();
  const { gameConfig, gameData } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setSongPoints(gameConfig.gamePoints);
  }, [gameData.currentSong]);

  const handleAnswer = e => {
    setNumberOfSongs(songs => songs - 1);
    if (!e) {
      setCorrectAnswer(false);
      return setAnswered(true);
    }
    if (e.target.value === gameData.currentSong) {
      setCorrectAnswer(true);
      dispatch(setUserPoints(songPoints));
      return setAnswered(true);
    }
    setCorrectAnswer(false);
    return setAnswered(true);
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
