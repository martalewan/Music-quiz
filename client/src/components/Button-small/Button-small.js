const ButtonSmall = ({
  type, className, innerText, onClickFunc,
}) => (
  <button
    type={type}
    className={`btn-small ${className}__btn-small`}
    onClick={onClickFunc}
  >
    {innerText}
  </button>
);

export default ButtonSmall;
