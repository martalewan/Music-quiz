/* eslint-disable */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import songs from '../../music';
import Player from '../../components/Player/Player';
import QuizChoices from '../../components/Quiz-choices/Quiz-choices';
import SongResult from '../../components/Song-result/Song-result';
import TimerComponent from '../../components/Timer/Timer';
import { resetUserPoints, incrementGameRound, setCurrentSong, setIsCountdown } from '../../redux/actions';
import Lobby from '../../components/Lobby/Lobby';
import { createRandomAnswers, startCountdown, quitLobby, goToNextSong } from '../../sockets';

const Quiz = () => {
  const { gameConfig, gameData, currentUser } = useSelector(state => state);
  const { currentSong, isLobby, isCountdown, gameId, isAnswered} = gameData;
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [songPoints, setSongPoints] = useState(gameConfig.gamePoints);
  const [numberOfSongs, setNumberOfSongs] = useState(gameConfig.songNumber);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsPlaying(false);
    setNumberOfSongs(gameConfig.songNumber);
    dispatch(resetUserPoints(0));
  }, []); 
  
  const startFromLobby = () => {
    startCountdown(currentUser, gameId, true);
    quitLobby(currentUser, gameId);
  };

  const resetCountdown = countdown => {
    startCountdown(currentUser, gameId, countdown);
  }

  const timerAction = () => {
    dispatch(incrementGameRound());
    dispatch(setIsCountdown(false));
  }

  const setNextSong = async () => {
    const gameRoundData = await gameData.currRound;
    const nextSong = await gameData.songsList[gameRoundData];
    dispatch(setCurrentSong(nextSong));
    createRandomAnswers(gameData.songsList, nextSong, dispatch);
    startCountdown(currentUser, gameId, true);
    goToNextSong(currentUser, gameId, gameData.songsList, gameRoundData);
  };

  return (
      <section className='quiz'>
          {isLobby
            && currentSong
            && <Lobby startCountDown={startFromLobby}/>
          }
          {isCountdown 
            && <TimerComponent
                  time={3}
                  timerAction={timerAction}
                />
          }
          { currentSong
            && !isLobby
            && !isAnswered
            && !isCountdown
            && !gameOver
            && <>
              <Player
                playingSong={gameData.currentSong}
                songs={songs}
                setIsPlaying={setIsPlaying}
              /> 
              <QuizChoices 
                currentSong={gameData.currentSong}
                setCorrectAnswer={setCorrectAnswer}
                setSongPoints={setSongPoints}
                songPoints={songPoints}
                numberOfSongs={numberOfSongs}
                setNumberOfSongs={setNumberOfSongs}
                isPlaying={isPlaying}
              />
            </>
          }
          {isAnswered
            && currentSong
            && !isLobby
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
