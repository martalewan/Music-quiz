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
      <p>This is a new paragraph</p>
      <audio controls>
        <source src="client/public/music/survivor.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio controls>
        <source src="client/public/music/Survivor-short.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default App;
