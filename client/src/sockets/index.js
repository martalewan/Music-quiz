import { v4 as uuidv4 } from 'uuid';
import gameConfig from '../game-logic/game-config';
import {
  setSongChoices,
  setCurrentSong,
  resetGameRound,
  addPlayerToGame,
  setIsLobby,
  setGameId,
  setIsCountdown,
  setAnswered,
} from '../redux/actions';

// const HOST = window.location.origin.replace(/^http/, 'ws');
// const socket = new WebSocket(HOST);
const socket = new WebSocket('ws://localhost:9999/ws');

const randomizeSongs = list => [...list].sort(() => Math.random() - 0.5);
const filterSongs = (list, currentSong) => list.filter(song => song !== currentSong);

socket.onerror = event => {
  console.error('WebSocket error observed:', event);
};

socket.onclose = event => {
  console.log('WebSocket is closed now.');
  console.log('Event:', event);
};

export const connectToSocket = currentUser => {
  const newUserPayload = {
    method: 'newUser',
    clientId: currentUser.userId,
  };
  socket.send(JSON.stringify(newUserPayload));
};

socket.onopen = () => {
  console.log('socket opened');
};

export const createRandomAnswers = async (songsList, currentSong, dispatch) => {
  // GET THE SONGS
  const randomSongs = await randomizeSongs(songsList);
  const filteredRandomSong = await filterSongs(randomSongs, currentSong);
  const answers = filteredRandomSong.slice(0, gameConfig.numberOfAnswers - 1);
  const randomizedChoices = randomizeSongs([
    currentSong,
    ...answers,
  ]);

  if (dispatch) dispatch(setSongChoices(randomizedChoices));
  return randomizedChoices;
};

export const createGame = async (
  dispatch, currentUser, setCurrentGame, songsList, gameRound,
) => {
  const currentSong = songsList[gameRound];
  const randomizedAnswers = await createRandomAnswers(songsList, currentSong, dispatch);
  dispatch(setCurrentSong(currentSong));
  dispatch(resetGameRound());

  const gameId = uuidv4();
  setCurrentGame({ gameId });

  const payLoad = {
    method: 'create',
    clientId: currentUser.userId,
    gameId,
    songChoices: randomizedAnswers,
    currentSong,
    gameRound,
    quizModerator: currentUser.username,
  };
  socket.send(JSON.stringify(payLoad));
};

export const joinGame = (currentUser, gameId) => {
  const payLoad = {
    method: 'join',
    clientId: currentUser.userId,
    username: currentUser.username,
    gameId,
  };
  socket.send(JSON.stringify(payLoad));
};

// export const handleAnswer = (currentUser, gameId) => {
//   const payLoad = {
//     method: 'hasAnswered',
//     clientId: currentUser.userId,
//     username: currentUser.username,
//     gameId,
//   };
//   socket.send(JSON.stringify(payLoad));
// };

export const startCountdown = (currentUser, gameId, countdown) => {
  const payLoad = {
    method: 'startCountdown',
    clientId: currentUser.userId,
    username: currentUser.username,
    countdown,
    gameId,
  };
  socket.send(JSON.stringify(payLoad));
};

export const goToNextSong = async (currentUser, gameId, songsList, gameRound) => {
  const currentSong = songsList[gameRound];
  const randomizedAnswers = await createRandomAnswers(songsList, currentSong);

  const payLoad = {
    method: 'goToNextSong',
    clientId: currentUser.userId,
    username: currentUser.username,
    songChoices: randomizedAnswers,
    currentSong,
    gameId,
  };
  socket.send(JSON.stringify(payLoad));
};

export const quitLobby = (currentUser, gameId) => {
  const payLoad = {
    method: 'quitLobby',
    clientId: currentUser.userId,
    username: currentUser.username,
    gameId,
  };
  socket.send(JSON.stringify(payLoad));
};

export const messageListener = (setOpenGames, dispatch) => {
  socket.addEventListener('message', e => {
    const data = JSON.parse(e.data);
    const { method } = data;

    if (method === 'create') {
      const gamesArray = Object.values(data.allGames);
      setOpenGames(gamesArray);
    }
    if (method === 'join') {
      dispatch(addPlayerToGame(data.game.clients));
      dispatch(setSongChoices(data.game.songChoices));
      dispatch(setCurrentSong(data.game.currentSong));
      dispatch(setGameId(data.game.id));
    }
    if (method === 'startCountdown') {
      // console.log(data.game);
      dispatch(setIsCountdown(true));
      dispatch(setAnswered(false));
    }
    if (method === 'quitLobby') {
      dispatch(setIsLobby(false));
    }
    if (method === 'goToNextSong') {
      dispatch(setCurrentSong(data.currentSong));
      dispatch(setSongChoices(data.songChoices));
    }

    console.log('e.data', data);
  });
};
