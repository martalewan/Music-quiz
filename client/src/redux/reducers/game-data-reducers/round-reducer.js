import { INCREMENT_GAME_ROUND, RESET_GAME_ROUND } from '../../actions/action-types';

const roundReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_GAME_ROUND:
      return state + 1;
    case RESET_GAME_ROUND:
      return 0;
    default:
      return state;
  }
};

export default roundReducer;
