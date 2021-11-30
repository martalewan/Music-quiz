import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setUserLoggedOut } from '../../redux/actions';
import Button from '../Button/Button';

const Navigation = () => {
  const { isUserLoggedIn } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogoutClick = () => {
    dispatch(setUserLoggedOut());
    navigate('/');
    cookies.remove('user');
  };

  return (
    <nav className="nav">
      <Link to='/' >
        <p className="nav__logo">Logo</p>
      </Link>
      {isUserLoggedIn && <Button
        className="nav-logout"
        onClickFunc={handleLogoutClick}
        innerText='LOGOUT'
      />}
    </nav>
  );
};

export default Navigation;
