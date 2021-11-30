import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/Login-page';
import Quiz from './pages/Quiz/Quiz';
import UserHub from './pages/UserHub/UserHub';
import Instructions from './pages/Instructions/Instructions-page';

const App = () => {
  useEffect(() => {
    const HOST = window.location.origin.replace(/^http/, 'ws');
    const socket = new WebSocket(HOST);

    socket.addEventListener('message', e => {
      console.log('e.data', e.data);
    });
    socket.addEventListener('open', () => {
      console.log('Frontend is open for papi');
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
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
