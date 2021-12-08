// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Title from '../Title/Title';

const Lobby = ({ startCountDown }) => {
  const { gameData } = useSelector(state => state);

  const players = gameData.connectedPlayers;

  return (
      <>
        <Title title="Let's play" />
        <p className='quiz__description'>Quiz players:</p>
        {players
          && <ol className='quiz__players-list'>
              {players.map((person, index) => (
                  <li className='quiz__player' key={index}>
                    {person.username}
                  </li>
              ))}
            </ol>
          }

      <Link className='link' to='/quiz'>
        <Button
            className='start-game'
            innerText='START GAME'
            onClickFunc={startCountDown}
          />
        </Link>
      </>
  );
};

export default Lobby;
