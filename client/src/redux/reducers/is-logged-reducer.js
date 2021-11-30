import { SET_USER_LOGGED_IN, SET_USER_LOGGED_OUT } from '../actions/action-types';

const isUserLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case SET_USER_LOGGED_IN:
      return true;
    case SET_USER_LOGGED_OUT:
      return false;
    default:
      return state;
  }
};

export default isUserLoggedReducer;
