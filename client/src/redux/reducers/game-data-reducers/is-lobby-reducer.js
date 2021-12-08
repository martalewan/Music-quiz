import { SET_IS_LOBBY } from '../../actions/action-types';

const isLobbyReducer = (state = true, action) => {
  switch (action.type) {
    case SET_IS_LOBBY:
      return action.payload;
    default:
      return state;
  }
};

export default isLobbyReducer;
