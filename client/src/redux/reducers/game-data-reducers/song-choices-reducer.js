import { SET_SONG_CHOICES } from '../../actions/action-types';

const songChoicesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SONG_CHOICES:
      return action.payload;
    default:
      return state;
  }
};

export default songChoicesReducer;
