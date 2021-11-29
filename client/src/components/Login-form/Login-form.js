import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../Text-input/Text-input';

const LoginForm = () => {
  const [formState, setFormState] = useState('');
  const passedFormState = [formState, setFormState];
  console.log(formState, setFormState);
  const formClassName = 'login-form';

  return (
    <form className={formClassName}>
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
        innerText='CREATE A GAME'
      />
    </form>
  );
};

export default LoginForm;
