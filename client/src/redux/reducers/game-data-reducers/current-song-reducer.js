import { SET_CURRENT_SONG } from '../../actions/action-types';

const currentSongReducer = (state = '', action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return action.payload;
    default:
      return state;
  }
};

export default currentSongReducer;
