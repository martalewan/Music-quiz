import {
  SAVE_USER,
  SET_USER_LOGGED_IN,
  SET_USER_LOGGED_OUT,
  SET_USER_POINTS,
  SET_GAME_CONFIG,
  RESET_USER_POINTS,
} from './action-types';
import { saveRoundTime, saveAverageRoundTime } from './game-stats-action';
import {
  setSongChoices,
  setCurrentSong,
  incrementGameRound,
  resetGameRound,
  setSongsList,
  addPlayerToGame,
  resetGamePlayers,
  setIsLobby,
  setGameId,
  setIsCountdown,
  setAnswered,
} from './game-data-actions';

export const saveUser = user => ({
  type: SAVE_USER,
  payload: user,
});

export const setUserLoggedIn = () => ({
  type: SET_USER_LOGGED_IN,
});

export const setUserLoggedOut = () => ({
  type: SET_USER_LOGGED_OUT,
});

export const setUserPoints = points => ({
  type: SET_USER_POINTS,
  payload: points,
});

export const resetUserPoints = points => ({
  type: RESET_USER_POINTS,
  payload: points,
});

export const setGameConfig = payload => ({
  type: SET_GAME_CONFIG,
  payload,
});

export {
  saveRoundTime,
  saveAverageRoundTime,
  setSongChoices,
  setCurrentSong,
  incrementGameRound,
  resetGameRound,
  setSongsList,
  addPlayerToGame,
  resetGamePlayers,
  setIsLobby,
  setGameId,
  setIsCountdown,
  setAnswered,
};
