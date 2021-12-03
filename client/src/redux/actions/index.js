import {
  SAVE_USER, SET_USER_LOGGED_IN, SET_USER_LOGGED_OUT, SET_USER_POINTS, SET_GAME_CONFIG,
} from './action-types';

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

export const setGameConfig = payload => ({
  type: SET_GAME_CONFIG,
  payload,
});
