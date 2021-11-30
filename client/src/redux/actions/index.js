import { SAVE_USER, SET_USER_LOGGED_IN } from './action-types';

export const saveUser = user => ({
  type: SAVE_USER,
  payload: user,
});

export const setUserLoggedIn = () => ({
  type: SET_USER_LOGGED_IN,
});
