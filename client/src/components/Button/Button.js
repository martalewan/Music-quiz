const Button = ({ type, className, innerText }) => (
  <button
  // submit
  type = {type}
  className = {`btn ${className}__button`} >
  {innerText}
  </button>
);

export default Button;
