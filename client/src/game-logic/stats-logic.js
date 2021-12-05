// import { useSelector } from 'react-redux';
import gameConfig from './game-config';

const totalAverageTime = userPoints => {
  const { gamePoints, songNumber } = gameConfig;
  // const { userPoints } = useSelector(stats => stats);
  return (((songNumber * gamePoints) / 100) - (userPoints / 100)) / songNumber;
};

export default totalAverageTime;
