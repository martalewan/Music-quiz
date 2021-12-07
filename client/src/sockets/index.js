import { v4 as uuidv4 } from 'uuid';
import gameConfig from '../game-logic/game-config';
import { setSongChoices, setCurrentSong } from '../redux/actions';

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

const createRandomAnswers = async (dispatch, songsList, currentSong) => {
  // GET THE SONGS
  const randomSongs = await randomizeSongs(songsList);
  const filteredRandomSong = await filterSongs(randomSongs, currentSong);
  const answers = filteredRandomSong.slice(0, gameConfig.numberOfAnswers - 1);
  const randomizedChoices = randomizeSongs([
    currentSong,
    ...answers,
  ]);

  dispatch(setSongChoices(randomizedChoices));
  return randomizedChoices;
};

export const createGame = async (
  dispatch, currentUser, setCurrentGame, songsList, gameRound,
) => {
  const currentSong = songsList[gameRound];
  const randomizedAnswers = await createRandomAnswers(dispatch, songsList, currentSong);
  dispatch(setCurrentSong(currentSong));

  const gameId = uuidv4();
  setCurrentGame({ gameId });

  const payLoad = {
    method: 'create',
    // clients,
    clientId: currentUser.userId,
    gameId,
    songChoices: randomizedAnswers,
    currentSong,
    gameRound,
    // playing,
    // joinable,
  };
  socket.send(JSON.stringify(payLoad));
};

export const joinGame = (currentUser, gameId) => {
  const payLoad = {
    method: 'join',
    clientId: currentUser.userId,
    gameId,
  };
  socket.send(JSON.stringify(payLoad));
};

export const messageListener = setOpenGames => {
  socket.addEventListener('message', e => {
    const data = JSON.parse(e.data);
    const { method } = data;

    if (method === 'create') {
      const gamesArray = Object.values(data.allGames);
      console.log(gamesArray);
      setOpenGames(gamesArray);
    }

    console.log('e.data', data);
  });
};
