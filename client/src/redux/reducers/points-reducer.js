import { SET_USER_POINTS, RESET_USER_POINTS } from '../actions/action-types';

const pointsReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_USER_POINTS:
      return state + action.payload;
    case RESET_USER_POINTS:
      return action.payload;
    default:
      return state;
  }
};

export default pointsReducer;
