import { SAVE_USER } from '../actions/action-types';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
