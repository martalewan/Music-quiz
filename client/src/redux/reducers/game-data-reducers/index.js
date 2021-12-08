import { combineReducers } from 'redux';
import songChoices from './song-choices-reducer';
import currentSong from './current-song-reducer';
import currRound from './round-reducer';
import songsList from './songs-list-reducer';
import connectedPlayers from './connected-players-reducer';
import isLobby from './is-lobby-reducer';
import isCountdown from './is-countdown-reducer';
import setAnsweredReducer from './set-answered-reducer';
import gameId from './game-id-reducer';

const gameDataReducer = combineReducers({
  songChoices,
  currentSong,
  currRound,
  songsList,
  connectedPlayers,
  isLobby,
  isCountdown,
  gameId,
  isAnswered: setAnsweredReducer,
});

export default gameDataReducer;
