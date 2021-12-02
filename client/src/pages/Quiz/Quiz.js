/* eslint-disable */
import {
  useState, useEffect
} from 'react';
import songs from '../../music';
import Player from '../../components/Player/Player';
import QuizChoices from '../../components/Quiz-choices/Quiz-choices';
import SongResult from '../../components/Song-result/Song-result';
import TimerComponent from '../../components/Timer/Timer';

const fetchSongsList = async setSongsList => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const fetchSongs = await fetch('/api/songs', requestOptions);
  const data = await fetchSongs.json();
  setSongsList(data);
  return data;
};

const Quiz = () => {
  const [songsList, setSongsList] = useState([]);
  const [currentSong, setCurrentSong] = useState();
  const [playingSongIndex, setPlayingSongIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [isCountdown, setIsCountdown] = useState(true);
  const [songPoints, setSongPoints] = useState(1500);
  const [numberOfSongs, setNumberOfSongs] = useState(3);
 
  useEffect(() => {
    fetchSongsList(setSongsList);
  }, []); 
  
  useEffect(() => {
    setCurrentSong(songsList[playingSongIndex])
  }, [songsList, playingSongIndex]);

  const setNextSong = () => {
    setAnswered(false);
    setIsCountdown(true);
  };

  return (
    <section className='quiz'>
      {isCountdown 
        && <TimerComponent
              time={3}
              timerAction={setIsCountdown}
            />
      }
      { currentSong
        && !answered
        && !isCountdown
        && <>
          <Player playingSong={currentSong} songs={songs}/> 
          <QuizChoices 
            currentSong={currentSong}
            songsList={songsList}
            setAnswered={setAnswered}
            setCorrectAnswer={setCorrectAnswer}
            setPlayingSongIndex={setPlayingSongIndex}
            setSongPoints={setSongPoints}
            songPoints={songPoints}
          />
        </>
      }
      {answered
        && !isCountdown
        && <SongResult 
          correctAnswer={correctAnswer} 
          setNextSong={setNextSong}
          songPoints={songPoints}
        /> 
      }
    </section>
  );
};

export default Quiz;
