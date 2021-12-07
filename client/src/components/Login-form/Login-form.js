import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button/Button';
import TextInput from '../Text-input/Text-input';
import { saveUser, setUserLoggedIn } from '../../redux/actions';

const initialState = { username: '', password: '' };

const fetchUser = ([formState, setFormState]) => (
  async dispatch => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    };

    const fetchData = await fetch('/api/users', requestOptions);
    const data = await fetchData.json();
    dispatch(saveUser(data));
    dispatch(setUserLoggedIn());
    setFormState(initialState);
    return true;
  }
);

const LoginForm = () => {
  const [formState, setFormState] = useState(initialState);
  const passedFormState = [formState, setFormState];
  const formClassName = 'login-form';
  const dispatch = useDispatch();

  const handleFormSubmit = async e => {
    e.preventDefault();
    dispatch(fetchUser(passedFormState));
  };

  return (
    <form className={formClassName} onSubmit={handleFormSubmit}>
      <TextInput
        formState={passedFormState}
        inputType='text'
        inputName='username'
        placeholder='Type your username'
        className={formClassName}
      />
      <Button
        className='login-form'
        type='submit'
        innerText='LOGIN'
      />
    </form>
  );
};

export default LoginForm;
