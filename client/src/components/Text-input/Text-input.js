const TextInput = ({
  placeholder, className, formState, inputName, inputType,
}) => {
  const [inputValue, setInputValue] = formState;

  const handleOnChange = e => {
    setInputValue(oldState => ({
      ...oldState,
      [inputName]: e.target.value,
    }));
  };

  return (
    <>
    <label id={inputName} className={`${className}__label hidden`}>{inputName}</label>
    <input
      type = {inputType}
      aria-labelledby = {inputName}
      placeholder = {placeholder}
      className = {`${className}__input`}
      value = {inputValue[inputName]}
      onChange = {handleOnChange}
      maxLength='9'
      required
    />
    </>
  );
};

export default TextInput;
