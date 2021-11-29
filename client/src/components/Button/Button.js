const Button = ({ type, className, innerText }) => (
  <button
  // submit
  type = {type}
  className = {`btn ${className}__btn`} >
  {innerText}
  </button>
);

export default Button;
