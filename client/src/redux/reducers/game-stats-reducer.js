import { SAVE_AVERAGE_ROUND_TIME, SET_USER_POINTS, RESET_USER_POINTS } from '../actions/action-types';
import gameConfig from '../../game-logic/game-config';

const initialState = {
  totalPoints: 0,
  averageTotalTime: 0,
};

const gameStatsReducer = (state = initialState, action) => {
  const { gamePoints, songNumber } = gameConfig;
  const averageTotalTime = (((songNumber * gamePoints) / 100)
  - (action.payload / 100)) / songNumber;
  const roundedAverageTime = averageTotalTime.toFixed(1);

  switch (action.type) {
    case SAVE_AVERAGE_ROUND_TIME:
      return {
        ...state,
        averageTotalTime: roundedAverageTime,
      };
    case SET_USER_POINTS:
      return {
        ...state,
        totalPoints: state.totalPoints + action.payload,
      };
    case RESET_USER_POINTS:
      return {
        averageTotalTime: 0,
        totalPoints: action.payload,
      };
    default:
      return state;
  }
};

export default gameStatsReducer;
