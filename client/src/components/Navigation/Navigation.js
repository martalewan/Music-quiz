import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setUserLoggedOut } from '../../redux/actions';

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
      <Link className='link' to='/' >
        <p className="nav__logo">MUSICVAVORS</p>
      </Link>
      {isUserLoggedIn && <button
      className="nav-logout__btn"
      onClick={handleLogoutClick}>LOGOUT</button>}
    </nav>
  );
};

export default Navigation;
