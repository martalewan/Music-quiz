import { useEffect } from 'react';
import survivor from './music/survivor.mp3';

const App = () => {
  useEffect(() => {
    const getEnvVars = async () => {
      // const vars = await fetch('/setup-vars/env-url').catch(err => console.err(err));
      // const { HOST, PORT } = await vars.json();
      // console.log(PORT);
      // const socket = new WebSocket(`ws://${HOST}${PORT}`);
      const socket = new WebSocket('ws://localhost:9999');

      socket.addEventListener('message', e => {
        console.log('BANANANANANA', e.data);
      });
      socket.addEventListener('open', () => {
        console.log('Frontend is open for papi');
      });
    };
    getEnvVars();
  }, []);

  return (
    <div className="App">
      The Music Quiz
      <p>This is a new paragraph</p>
      <audio controls>
        <source src={survivor} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default App;
