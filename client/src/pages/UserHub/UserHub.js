import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';

const handleStartClick = navigate => {
  navigate('/quiz');
};

const handleHowToPlayClick = navigate => {
  navigate('/instructions');
};

const UserHub = () => {
  const { currentUser } = useSelector(state => state);
  const username = currentUser.username || 'YOU';
  const navigate = useNavigate();

  return (
  <>
    <Title title={`WELCOME ${username.toUpperCase()}`}/>
    <Button
      className='how-to-play'
      innerText='HOW TO PLAY'
      onClickFunc={handleHowToPlayClick(navigate)}
    />
    <Button
      className='start-game'
      innerText='START'
      onClickFunc={handleStartClick(navigate)}
    />
  </>
  );
};

export default UserHub;
