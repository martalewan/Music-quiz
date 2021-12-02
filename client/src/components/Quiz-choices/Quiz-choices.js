import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ButtonChoice from '../Button-choice/Button-choice';
import TimerComponent from '../Timer/Timer';
import { setUserPoints } from '../../redux/actions';

const QuizChoices = ({
  currentSong,
  songsList, setAnswered, setCorrectAnswer, setPlayingSongIndex, setSongPoints, songPoints,
}) => {
  const [songChoices, setSongChoices] = useState();
  const dispatch = useDispatch();

  const randomizeSongs = list => list.sort(() => Math.random() - 0.5);
  const filterSongs = list => list.filter(song => song !== currentSong);

  useEffect(() => {
    (async () => {
      const randomSongs = await randomizeSongs(songsList);
      const filteredRandomSong = await filterSongs(randomSongs);
      setSongChoices(randomizeSongs([
        currentSong,
        filteredRandomSong[0],
        filteredRandomSong[1],
      ]));
      setSongPoints(1500);
    }
    )();
  }, []);

  const handleAnswer = e => {
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
      <TimerComponent time={5} timerAction={userChoice} setSongPoints={setSongPoints} />
    </article>
  );
};

export default QuizChoices;
