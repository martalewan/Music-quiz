import { SET_GAME_CONFIG } from '../actions/action-types';
import gameConfig from '../../game-logic/game-config';

const gameConfigReducer = (state = gameConfig, action) => {
  switch (action.type) {
    case SET_GAME_CONFIG:
      return action.payload;
    default:
      return state;
  }
};

export default gameConfigReducer;
