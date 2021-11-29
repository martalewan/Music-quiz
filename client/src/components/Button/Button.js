const Button = ({ type, className, innerText }) => (
  <button
    type = {type}
    className = {`btn ${className}__btn`}
  >
  {innerText}
  </button>
);

export default Button;
