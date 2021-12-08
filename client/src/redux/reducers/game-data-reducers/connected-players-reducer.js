import { ADD_PLAYER_TO_GAME, RESET_GAME_PLAYERS } from '../../actions/action-types';

const connectedPlayersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PLAYER_TO_GAME:
      return action.payload;
    case RESET_GAME_PLAYERS:
      return [];
    default:
      return state;
  }
};

export default connectedPlayersReducer;
