const webSocket = require('ws').Server;

const socketsConnection = server => {
  const wsServer = new webSocket({
    "server": server,
    "path": "/ws",
  });

  const clients = {};
  const games = {};

  console.log(clients)

  wsServer.on('connection', socket => {
    console.log("Welcome to our socket");

    socket.on('message', (message) => {
      const result = JSON.parse(message);
      if (result.method === "newUser") {
        const clientId = result;
        console.log(clientId);
        clients[clientId] = {
          "connection": socket,
        }

        const payLoad = {
          method: 'connect',
          clientId: clientId,
        }
        //send back the client connect
        socket.send(JSON.stringify(payLoad))
      }
      let i = 0;
      // if (result.method === "create") {
      //     i++
      //     const clientId = result.clientId;
      //     const gameId = 1;
      //     games[gameId] = {
      //         "id": gameId,
      //         "clients": []
      //     }
      //     console.log('III', i)

      //     const payLoad = {
      //         "method": "create",
      //         "game" : games[gameId]
      //     }

      //     const con = clients[clientId].connection;
      //     con.send(JSON.stringify(payLoad));
      // }
    });
    
    socket.on("close", () => {
      console.log("Socket Disconnected");
    })
  });
}

module.exports = socketsConnection;
