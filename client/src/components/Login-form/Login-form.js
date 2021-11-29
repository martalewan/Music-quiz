import { useState } from 'react';
import Button from '../Button/Button';

const LoginForm = () => {
  const [formState, setFormState] = useState('');
  console.log(formState, setFormState);

  return (
    <form>
      <Button className = 'form' type = 'submit' innerText = 'CREATE A GAME' />
    </form>
  );
};

export default LoginForm;
