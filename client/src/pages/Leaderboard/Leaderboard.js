import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStats } from '../../game-logic/stats-logic';
import Button from '../../components/Button/Button';

const Leaderboard = () => {
  const [topTen, setTopTen] = useState([]);

  useEffect(() => {
    (async () => {
      const gameStats = await getStats('/api/users/stats/high-scores/top-10');
      setTopTen(gameStats.rows);
    })();
  }, []);

  return (
    <div className='leaderboard-page'>
      <section className='leaderboard'>
        <h1 className='leaderboard__title'>Leaderboard</h1>
        <article className='leaderboard__tags'>
          <h3 className='stats-tag-title'>Player</h3>
          <h3 className='stats-tag-title__score'>Score</h3>
          <h3 className='stats-tag-title__title'>Av time</h3>
        </article>
        {topTen
          && <ol className='leaderboard__user-stats'>
            {topTen.map((personal, index) => (
                <li className='leaderboard__items-stats' key={index}>
                  <p className='stats-title'><span className='stats-span'>{personal.username}</span></p>
                  <p className='stats-title'><span className='stats-span'>{personal.score}</span></p>
                  <p className='stats-title'><span className='stats-span'>{personal.averageTime}</span></p>
                </li>
            ))}
          </ol>
        }
      </section>
      <Link className='link' to='/userhub'>
        <Button
          className='back'
          innerText='BACK'
        />
      </Link>
    </div>
  );
};

export default Leaderboard;
