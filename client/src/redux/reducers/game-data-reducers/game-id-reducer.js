import { SET_GAME_ID } from '../../actions/action-types';

const gameIdReducer = (state = '', action) => {
  switch (action.type) {
    case SET_GAME_ID:
      return action.payload;
    default:
      return state;
  }
};

export default gameIdReducer;
