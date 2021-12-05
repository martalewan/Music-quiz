import { SAVE_AVERAGE_ROUND_TIME } from '../actions/action-types';
import gameConfig from './game-config';

const initialState = {
  totalPoints: 0,
  averageTotalTime: 0,
};

const gameStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_AVERAGE_ROUND_TIME:
      const { gamePoints, songNumber } = gameConfig;
      const averageTotalTime = (((songNumber * gamePoints) / 100) - (action.payload / 100)) / songNumber;
      return {
        ...state,
        averageTotalTime,
      };
    // case SAVE_AVERAGE_ROUND_TIME: {
    //   const totalAnswerTime = state.answerTimes.reducer((prev, curr) => prev + curr);
    //   const averageAnswerTime = totalAnswerTime / state.answerTimes.length;
    //   return {
    //     ...state,
    //     averageAnswerTime,
    //   };
    // }
    default:
      return state;
  }
};

export default gameStatsReducer;
