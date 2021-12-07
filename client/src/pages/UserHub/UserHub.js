import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import ButtonSmall from '../../components/Button-small/Button-small';
import { getStats } from '../../game-logic/stats-logic';
import {
  connectToSocket, createGame, joinGame, messageListener,
} from '../../sockets';

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

const UserHub = () => {
  const [personalLastThree, setPersonalLastThree] = useState();
  const [currentGame, setCurrentGame] = useState({});
  const [openGames, setOpenGames] = useState([]);
  const [songsList, setSongsList] = useState([]);

  const { currentUser, gameData } = useSelector(state => state);
  const username = currentUser.username || 'YOU';
  const mountedRef = useRef(true);
  const dispatch = useDispatch();

  fetchSongsList(setSongsList);

  // useEffect(() => {
  //   setCurrentSong(songsList[playingSongIndex]);
  // }, [songsList, playingSongIndex]);

  useEffect(() => {
    const setGameStats = async () => {
      if (!mountedRef.current) return null;
      const gameStats = await getStats(`/api/users/stats/${currentUser.userId}`);
      return setPersonalLastThree(gameStats.reverse());
    };
    setGameStats();
    return () => {
      mountedRef.current = false;
    };
  }, [personalLastThree]);

  useEffect(() => {
    messageListener(setOpenGames);
    return () => messageListener(setOpenGames);
  }, []);

  const connectAndCreateGame = () => {
    connectToSocket(currentUser);
    createGame(
      dispatch,
      currentUser,
      setCurrentGame,
      songsList,
      gameData.currRound,
    );
  };

  const joinGameOnClick = () => {
    joinGame(currentUser, currentGame.gameId);
  };

  return (
  <section className='welcome-wrapper'>
    <Title title={`WELCOME ${username.toUpperCase()}`}/>
    {/* <Link className='link' to='/quiz'>
      <Button
        className='start-game'
        innerText='START'
      />
    </Link> */}
    {/* <Link className='link' to='/quiz'> */}
      <Button
        className='start-game'
        innerText='CREATE GAME'
        onClickFunc={connectAndCreateGame}
      />
    {/* </Link> */}
    {/* <Link className='link' to='/quiz'> */}
    {openGames
      && openGames.map(game => (
        <ButtonSmall
          className='start-game'
          innerText='MARTA GAME'
          onClickFunc={joinGameOnClick}
          key={game.id}
        />
      ))}

    {/* </Link> */}

    <Link className='link' to='/instructions' >
      <Button
        className='how-to-play'
        innerText='HOW TO PLAY'
      />
    </Link>
    <Link className='link' to='/leaderboard'>
      <Button
        className='leaderboard'
        innerText='LEADERBOARD'
      />
    </Link>
    {personalLastThree && <ul className='welcome-wrapper__user-stats'>
      <h4 className='stats-main-title'>Your last three games stats</h4>
      {personalLastThree.map((personal, index) => {
        if (index <= 2) {
          return (
            <li className='welcome-wrapper__items-stats' key={index}>
              <p className='stats-title-user'>Total score: <span className='stats-span'>{personal.totalPoints}</span></p>
              <p className='stats-title-user'>Average time: <span className='stats-span'>{personal.averageTime} s</span></p>
            </li>
          );
        }
        return false;
      })
      }
    </ul>
  }
  </section>
  );
};

export default UserHub;
