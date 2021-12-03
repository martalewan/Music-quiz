import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
// import Stats from '../../components/Stats/Stats';

const UserHub = () => {
  const { currentUser } = useSelector(state => state);
  const username = currentUser.username || 'YOU';

  return (
  <section className='welcome-wrapper'>
    <Title title={`WELCOME ${username.toUpperCase()}`}/>
    {/* <Stats userStats={'Your quiz statistics'}/> */}
    <Link className='link' to='/instructions' >
      <Button
        className='how-to-play'
        innerText='HOW TO PLAY'
      />
    </Link>
    <Link className='link' to='/quiz'>
      <Button
        className='start-game'
        innerText='START'
      />
    </Link>
  </section>
  );
};

export default UserHub;
