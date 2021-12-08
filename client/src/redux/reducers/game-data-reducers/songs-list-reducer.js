import { SET_SONGS_LIST } from '../../actions/action-types';

const songsListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SONGS_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default songsListReducer;
