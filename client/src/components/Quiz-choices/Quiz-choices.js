import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonChoice from '../Button-choice/Button-choice';
import TimerComponent from '../Timer/Timer';
import { setUserPoints } from '../../redux/actions';

const QuizChoices = ({
  currentSong,
  songsList, setAnswered, setCorrectAnswer, setPlayingSongIndex, setSongPoints, songPoints,
  setNumberOfSongs, numberOfSongs,
}) => {
  const [songChoices, setSongChoices] = useState();
  const { gameConfig } = useSelector(state => state);
  const dispatch = useDispatch();

  const randomizer = list => list.sort(() => Math.random() - 0.5);
  const filterSongs = list => list.filter(song => song !== currentSong);

  useEffect(() => {
    (async () => {
      const filteredRandomSong = await filterSongs(songsList);
      setSongChoices(randomizer([
        currentSong,
        filteredRandomSong[0],
        filteredRandomSong[1],
      ]));
      setSongPoints(gameConfig.gamePoints);
    }
    )();
  }, []);

  const handleAnswer = e => {
    setNumberOfSongs(songs => songs - 1);
    console.log(numberOfSongs);
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
    setPlayingSongIndex(counter => counter + 1);
    return handleAnswer(e);
  };
  return (
    <article className='quiz__choices'>
      <TimerComponent time={gameConfig.songTimer}
        timerAction={userChoice}
        setSongPoints={setSongPoints}
      />
      {songChoices
        && songChoices.map((song, index) => (
          <ButtonChoice
            key={index}
            innerText={song}
            className='quiz'
            onClickFunc={userChoice}
            value={song}
          />
        ))
      }
    </article>
  );
};

export default QuizChoices;
