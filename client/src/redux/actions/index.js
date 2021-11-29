import { SAVE_USER } from './action-types';

export const saveUser = user => ({
  type: SAVE_USER,
  payload: user,
});

export const nothing = '';
