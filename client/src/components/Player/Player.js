import ReactAudioPlayer from 'react-audio-player';

const Player = ({ playingSong, songs }) => {
  const findSongIndex = song => songs.find(thisSong => thisSong.includes(song));

  return (
    <ReactAudioPlayer
      src={findSongIndex(playingSong)}
      autoPlay
      controls
    />
  );
};

export default Player;
