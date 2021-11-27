import './App.css';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:9999');
    socket.addEventListener('message', e => {
      console.log('BANANANANANA', e.data);
    });
    socket.addEventListener('open', () => {
      console.log('Frontend is open for papi');
    });
  }, []);

  return (
    <div className="App">
      The Music Quiz
    </div>
  );
};

export default App;
