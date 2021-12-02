const ButtonChoice = ({
  type, className, innerText, onClickFunc, value,
}) => (
  <button
    type={type}
    className={`btn ${className}__btn-game`}
    onClick={onClickFunc}
    value={value}
  >
    {innerText}
  </button>
);

export default ButtonChoice;
