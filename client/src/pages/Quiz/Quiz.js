/* eslint-disable */
import { useState, useEffect } from 'react';
import songs from '../../music';
import Player from '../../components/Player/Player';
import Button from '../../components/Button/Button';
import QuizChoices from '../../components/Quiz-choices/Quiz-choices';

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

  useEffect(() => {
    fetchSongsList(setSongsList);
  }, []);
  
  useEffect(() => {
    setCurrentSong(songsList[playingSongIndex])
  }, [songsList, playingSongIndex]);

  const setNextSong = () => {
    setPlayingSongIndex(counter => ++counter)
  }

  console.log(currentSong);

  return (
    <>
      <Button
        className='login-form'
        type='submit'
        innerText='PLAY THE GAME'
      />
      {currentSong && <QuizChoices currentSong={currentSong} songsList={songsList} />}
      <button onClick= {setNextSong}>CLICK IT</button>
      { currentSong && <Player playingSong={currentSong} songs={songs}/> }
    </>
  );
};

export default Quiz;
