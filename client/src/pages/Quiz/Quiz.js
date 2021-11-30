import survivor from '../../music/survivor.mp3';

const Quiz = () => (
  <audio controls>
  <source src={survivor} type="audio/mp3" />
  Your browser does not support the audio element.
  </audio>
);

export default Quiz;
