import ReactAudioPlayer from 'react-audio-player';

const Player = ({ playingSong, songs, setIsPlaying }) => {
  const findSong = song => songs.find(thisSong => thisSong.includes(song));

  return (
    <ReactAudioPlayer
      src={findSong(playingSong)}
      autoPlay
      onCanPlay={e => e.target.play()}
      onPlay={() => setIsPlaying(true)}
      controls
    />
  );
};

export default Player;
