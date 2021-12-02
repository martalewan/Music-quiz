/* eslint-disable */
import {
  useState, useEffect
} from 'react';
import songs from '../../music';
import Player from '../../components/Player/Player';
import QuizChoices from '../../components/Quiz-choices/Quiz-choices';
import SongResult from '../../components/Song-result/Song-result';
import TimerComponent from '../../components/Timer/Timer';
import EndGame from '../../components/End-game/End-game';


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
  const [numberOfSongs, setNumberOfSongs] = useState(5);
  const [gameOver, setGameOver] = useState(false);
 
  useEffect(() => {
    setNumberOfSongs(5);
    setGameOver(false);
    fetchSongsList(setSongsList);
  }, []); 
  
  useEffect(() => {
    setCurrentSong(songsList[playingSongIndex])
  }, [songsList, playingSongIndex]);

  console.log('SONGLIST', songsList);
  console.log('CURRENTSONG', currentSong);

  useEffect(() => {
    if (numberOfSongs === 0) {
      setGameOver(true);
    }
  }, [numberOfSongs]);

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
        && !gameOver
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
            numberOfSongs={numberOfSongs}
            setNumberOfSongs={setNumberOfSongs}
          />
        </>
      }
      {answered
        && !isCountdown
        && !gameOver
        && <SongResult 
          correctAnswer={correctAnswer} 
          setNextSong={setNextSong}
          songPoints={songPoints}
        /> 
      }
      {gameOver && <EndGame />}
    </section>
  );
};

export default Quiz;
