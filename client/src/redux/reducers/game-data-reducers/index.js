import { combineReducers } from 'redux';
import songChoices from './song-choices-reducer';
import currentSong from './current-song-reducer';
import currRound from './round-reducer';

const gameDataReducer = combineReducers({
  songChoices,
  currentSong,
  currRound,
});

export default gameDataReducer;
