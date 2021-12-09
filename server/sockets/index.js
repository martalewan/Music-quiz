const webSocket = require('ws').Server;

const socketsConnection = server => {
  const wsServer = new webSocket({
    "server": server
  });

  wsServer.on('connection', socket => {
    console.log("Welcome to our socket");

    socket.on('message', (message) => {
      // console.log('Our message: ', message);
    });
    
    socket.on("close", () => {
      // console.log("Socket Disconnected");
    })
  });
}

module.exports = socketsConnection;
