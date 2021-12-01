import { useState, useEffect } from 'react';
import Button from '../Button/Button';

const QuizChoices = ({ currentSong, songsList }) => {
  const [songChoices, setSongChoices] = useState();

  const randomizeSongs = list => list.sort(() => Math.random() - 0.5);
  const filterSongs = list => list.filter(song => song !== currentSong);

  useEffect(() => {
    (async () => {
      const randomSongs = await randomizeSongs(songsList);
      const filteredRandomSong = await filterSongs(randomSongs);
      setSongChoices(randomizeSongs([
        currentSong,
        filteredRandomSong[0],
        filteredRandomSong[1],
      ]));
    }
    )();
  }, []);

  console.log('LIST', songChoices);

  return (
    <>
    {
      <Button
      className='login-form'
      type='submit'
      innerText='PLAY THE GAME'
      />
    }
  </>
  );
};

export default QuizChoices;
