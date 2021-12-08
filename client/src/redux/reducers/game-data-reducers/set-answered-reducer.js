import { SET_ANSWERED } from '../../actions/action-types';

const setAnsweredReducer = (state = false, action) => {
  switch (action.type) {
    case SET_ANSWERED:
      return action.payload;
    default:
      return state;
  }
};

export default setAnsweredReducer;
