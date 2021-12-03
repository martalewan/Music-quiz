const ButtonChoice = ({
  type, className, song, onClickFunc,
}) => (
  <button
    type={type}
    className={`btn ${className}__btn-game`}
    onClick={onClickFunc}
    value={song}
  >
    {song.replaceAll('_', ' ')}
  </button>
);

export default ButtonChoice;
