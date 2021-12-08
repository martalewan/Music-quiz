import {
  SET_SONG_CHOICES, SET_CURRENT_SONG, INCREMENT_GAME_ROUND,
  RESET_GAME_ROUND, SET_SONGS_LIST,
  ADD_PLAYER_TO_GAME, RESET_GAME_PLAYERS,
  SET_IS_LOBBY, SET_GAME_ID, SET_IS_COUNTDOWN,
  SET_ANSWERED,
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

export const setSongsList = songsList => ({
  type: SET_SONGS_LIST,
  payload: songsList,
});

export const addPlayerToGame = player => ({
  type: ADD_PLAYER_TO_GAME,
  payload: player,
});

export const resetGamePlayers = () => ({
  type: RESET_GAME_PLAYERS,
});

export const setIsLobby = isLobby => ({
  type: SET_IS_LOBBY,
  payload: isLobby,
});

export const setIsCountdown = isCountdown => ({
  type: SET_IS_COUNTDOWN,
  payload: isCountdown,
});

export const setGameId = gameId => ({
  type: SET_GAME_ID,
  payload: gameId,
});

export const setAnswered = isAnswered => ({
  type: SET_ANSWERED,
  payload: isAnswered,
});
