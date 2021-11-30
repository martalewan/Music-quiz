import { SET_USER_LOGGED_IN } from '../actions/action-types';

const isUserLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case SET_USER_LOGGED_IN:
      return true;
    default:
      return state;
  }
};

export default isUserLoggedReducer;
