const Button = ({
  type, className, innerText, onClickFunc,
}) => (
  <button
    type={type}
    className={`btn ${className}__btn`}
    onClick={onClickFunc}
  >
    {innerText}
  </button>
);

export default Button;
