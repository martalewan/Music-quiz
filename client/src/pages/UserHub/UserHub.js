import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { getStats } from '../../game-logic/stats-logic';

const UserHub = () => {
  const [personalLastThree, setPersonalLastThree] = useState([]);
  const { currentUser } = useSelector(state => state);
  const username = currentUser.username || 'YOU';
  const mountedRef = useRef(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setGamesStats = async () => {
      if (!mountedRef.current) return null;
      const gameStats = await getStats(`/api/users/stats/${currentUser.userId}`);
      setLoading(false);
      return setPersonalLastThree(gameStats.reverse());
    };
    setGamesStats();
    return () => {
      mountedRef.current = false;
    };
  }, [personalLastThree]);

  const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  `;

  return (
  <section className='welcome-wrapper'>
    <Title title={`WELCOME ${username.toUpperCase()}`}/>
    <Link className='link' to='/quiz'>
      <Button
        className='start-game'
        innerText='START'
      />
    </Link>
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
    {<ScaleLoader loading={loading} css={override} size={150} />}
    {personalLastThree.length > 0 && !loading && personalLastThree && <ul className='welcome-wrapper__user-stats'>
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
