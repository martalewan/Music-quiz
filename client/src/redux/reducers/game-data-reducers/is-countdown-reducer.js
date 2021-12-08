import { SET_COUNTDOWN, SET_IS_COUNTDOWN } from '../../actions/action-types';

const isCountdownReducer = (state = false, action) => {
  switch (action.type) {
    case SET_IS_COUNTDOWN:
      return action.payload;
    default:
      return state;
  }
};

export default isCountdownReducer;