import { SAVE_ROUND_TIME, SAVE_AVERAGE_ROUND_TIME } from './action-types';

export const saveRoundTime = time => ({
  type: SAVE_ROUND_TIME,
  payload: time,
});

export const saveAverageRoundTime = time => ({
  type: SAVE_AVERAGE_ROUND_TIME,
  payload: time,
});
