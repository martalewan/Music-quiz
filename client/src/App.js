import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import LoginPage from './pages/Login/Login-page';
import Quiz from './pages/Quiz/Quiz';
import UserHub from './pages/UserHub/UserHub';
import Instructions from './pages/Instructions/Instructions-page';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import { saveUser, setUserLoggedIn } from './redux/actions';
import Navigation from './components/Navigation/Navigation';
import EndGame from './components/End-game/End-game';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const HOST = window.location.origin.replace(/^http/, 'ws');
      const socket = new WebSocket(HOST);
      const cookies = new Cookies();

      socket.addEventListener('message', () => {
        // console.log('e.data', e.data); // eslint-disable-line
      });
      socket.addEventListener('open', () => {
      });
      const user = cookies.get('user');
      if (user) {
        dispatch(saveUser(user));
        dispatch(setUserLoggedIn());
      }
    } catch (err) {
      console.error(err); // eslint-disable-line
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
          <Route path="/results" element={<EndGame />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
