import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import LoginPage from './pages/Login/Login-page';
import Quiz from './pages/Quiz/Quiz';
import UserHub from './pages/UserHub/UserHub';
import Instructions from './pages/Instructions/Instructions-page';
import { saveUser, setUserLoggedIn } from './redux/actions';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const HOST = window.location.origin.replace(/^http/, 'ws');
      const socket = new WebSocket(HOST);
      const cookies = new Cookies();

      socket.addEventListener('message', e => {
        console.log('e.data', e.data);
      });
      socket.addEventListener('open', () => {
        console.log('Frontend is open for papi');
      });
      const user = cookies.get('user');
      if (user) {
        dispatch(saveUser(user));
        dispatch(setUserLoggedIn());
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/userhub" element={<UserHub />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
