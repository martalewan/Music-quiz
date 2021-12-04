/* eslint-disable */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import songs from '../../music';
import Player from '../../components/Player/Player';
import QuizChoices from '../../components/Quiz-choices/Quiz-choices';
import SongResult from '../../components/Song-result/Song-result';
import TimerComponent from '../../components/Timer/Timer';
import { resetUserPoints } from '../../redux/actions';


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
  const { gameConfig } = useSelector(state => state);
  const [songsList, setSongsList] = useState([]);
  const [currentSong, setCurrentSong] = useState();
  const [playingSongIndex, setPlayingSongIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [isCountdown, setIsCountdown] = useState(true);
  const [songPoints, setSongPoints] = useState(gameConfig.gamePoints);
  const [numberOfSongs, setNumberOfSongs] = useState(gameConfig.songNumber);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
 
  useEffect(() => {
    setIsPlaying(false);
    setNumberOfSongs(gameConfig.songNumber);
    console.log('Quiz usereffect');
    dispatch(resetUserPoints(0));
    fetchSongsList(setSongsList);
  }, []); 
  
  useEffect(() => {
    setCurrentSong(songsList[playingSongIndex]);
  }, [songsList, playingSongIndex]);

  // useEffect(() => {
  //   if (numberOfSongs === 0) {
  //     setGameOver(true);
  //   }
  // }, [numberOfSongs]);

  // useEffect(() => {
  //   if (isPlaying) {
  //     return setIsCountdown(true);
  //   }
  //   return false;
  // }, [isPlaying])

  const setNextSong = () => {
    setAnswered(false);
    setIsCountdown(true);
    setPlayingSongIndex(index => index + 1);
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
          <Player
            playingSong={currentSong}
            songs={songs}
            setIsPlaying={setIsPlaying}
          /> 
          <QuizChoices 
            currentSong={currentSong}
            songsList={songsList}
            setAnswered={setAnswered}
            setCorrectAnswer={setCorrectAnswer}
            setSongPoints={setSongPoints}
            songPoints={songPoints}
            numberOfSongs={numberOfSongs}
            setNumberOfSongs={setNumberOfSongs}
            isPlaying={isPlaying}
          />
        </>
      }
      {answered
        && !isCountdown
        && <SongResult
          setGameOver={setGameOver}
          gameOver={gameOver} 
          correctAnswer={correctAnswer} 
          setNextSong={setNextSong}
          songPoints={songPoints}
          numberOfSongs={numberOfSongs}
        /> 
      }
    </section>
  );
};

export default Quiz;
