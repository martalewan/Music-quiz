import {
  SET_SONG_CHOICES, SET_CURRENT_SONG, INCREMENT_GAME_ROUND, RESET_GAME_ROUND,
} from './action-types';

export const setSongChoices = songs => ({
  type: SET_SONG_CHOICES,
  payload: songs,
});

export const setCurrentSong = currSong => ({
  type: SET_CURRENT_SONG,
  payload: currSong,
});

export const incrementGameRound = () => ({
  type: INCREMENT_GAME_ROUND,
});

export const resetGameRound = () => ({
  type: RESET_GAME_ROUND,
});
