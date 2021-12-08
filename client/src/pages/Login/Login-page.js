import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import musicIllustration from '../../images/music-illustration.png';
import LoginForm from '../../components/Login-form/Login-form';
import Title from '../../components/Title/Title';

const LoginPage = () => {
  const { isUserLoggedIn } = useSelector(state => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate('/userhub');
    }
  }, [isUserLoggedIn]);

  return (
    <section className='login-wrapper'>
      <Title title='Welcome' />
      <p className='login-wrapper__description'>Enter your username to create a music quiz</p>
      <img className='img-login' src={musicIllustration}></img>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
