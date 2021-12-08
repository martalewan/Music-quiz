/* eslint-disable */
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
import { setSongsList } from '../../redux/actions/game-data-actions';
import { resetUserPoints } from '../../redux/actions';

const fetchSongsList = () => (
  async dispatch => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const fetchSongs = await fetch('/api/songs', requestOptions);
    const data = await fetchSongs.json();
    dispatch(setSongsList(data));
    return data;
});

const UserHub = () => {
  const [personalLastThree, setPersonalLastThree] = useState();
  const [currentGame, setCurrentGame] = useState({});
  const [openGames, setOpenGames] = useState([]);
  const { currentUser, gameData } = useSelector(state => state);
  const username = currentUser.username || 'YOU';
  const mountedRef = useRef(true);
  const dispatch = useDispatch();

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
    dispatch(fetchSongsList());
    messageListener(setOpenGames, dispatch);
    // return () => messageListener(setOpenGames);
  }, []);
  
  const connectAndCreateGame = () => {
    if (!currentGame.gameId) {
      connectToSocket(currentUser);
      createGame(
        dispatch,
        currentUser,
        setCurrentGame,
        gameData.songsList,
        gameData.currRound,
      );
    }  
    return;
  };

  const joinGameOnClick = (gameId) => {
    connectToSocket(currentUser);
    joinGame(currentUser, gameId);
  };

  return (
  <section className='welcome-wrapper'>
    <Title title={`HELLO ${username.toUpperCase()}`}/>
    {/* <Link className='link' to='/quiz'> */}
      <Button
        className='start-game'
        innerText='CREATE GAME'
        onClickFunc={connectAndCreateGame}
      />
    {/* </Link> */}
    {openGames
      && openGames.map(game => (
        <Link key={game.id} className='link' to='/quiz'>
          {console.log(game)}
          <ButtonSmall
            className='start-game'
            innerText={`${game.quizModerator.toUpperCase()}'S GAME`}
            onClickFunc={() => joinGameOnClick(game.id)}
            />
          </Link>
      ))}

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
