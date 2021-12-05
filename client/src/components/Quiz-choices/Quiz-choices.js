import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonChoice from '../Button-choice/Button-choice';
import TimerComponent from '../Timer/Timer';
import { setUserPoints } from '../../redux/actions';

const QuizChoices = ({
  currentSong,
  songsList, setAnswered, setCorrectAnswer, setSongPoints, songPoints,
  setNumberOfSongs, isPlaying,
}) => {
  const [songChoices, setSongChoices] = useState();
  const { gameConfig } = useSelector(state => state);
  const dispatch = useDispatch();

  const randomizeSongs = list => [...list].sort(() => Math.random() - 0.5);
  const filterSongs = list => list.filter(song => song !== currentSong);

  useEffect(() => {
    (async () => {
      const randomSongs = await randomizeSongs(songsList);
      const filteredRandomSong = await filterSongs(randomSongs);
      const answers = filteredRandomSong.slice(0, gameConfig.numberOfAnswers - 1);

      setSongChoices(randomizeSongs([
        currentSong,
        ...answers,
      ]));
      setSongPoints(gameConfig.gamePoints);
    }
    )();
  }, [currentSong]);

  const handleAnswer = e => {
    setNumberOfSongs(songs => songs - 1);
    if (!e) {
      setCorrectAnswer(false);
      return setAnswered(true);
    }
    if (e.target.value === currentSong) {
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
