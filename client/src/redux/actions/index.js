import { SAVE_USER, SET_USER_LOGGED_IN, SET_USER_LOGGED_OUT } from './action-types';

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
