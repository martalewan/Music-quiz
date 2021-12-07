const webSocket = require('ws').Server;

const socketsConnection = server => {
  const wsServer = new webSocket({
    "server": server,
    "path": "/ws",
  });
  const clients = {};
  const games = {};

  console.log('all clients server', clients)

  wsServer.on('connection', socket => {
    console.log("Welcome to our socket");

    socket.on('message', (message) => {
      const result = JSON.parse(message);

      if (result.method === "newUser") {
        const clientId = result.clientId;

        clients[clientId] = {
          "connection": socket,
        }

        const payLoad = {
          method: 'connect',
          clientId,
        }
        //send back the client connect
        socket.send(JSON.stringify(payLoad))
      }

      if (result.method === "create") {
          const clientId = result.clientId; 
          const gameId = result.gameId;
          games[gameId] = {
              "id": gameId,
              "clients": [],
              "songChoices": result.songChoices,
              "currentSong": result.currentSong,
              "gameRound": result.gameRound,
          }

          const payLoad = {
              "method": "create",
              "game": games[gameId],
              "allGames": games,
          }

          const con = clients[clientId].connection;
          con.send(JSON.stringify(payLoad));
      }

      if (result.method === "join") {
        const clientId = result.clientId;
        const gameId = result.gameId;
        const game = games[gameId];
        if (game.clients.length >= 5) 
        {
        //sorry max players reach
          return;
        }
        game.clients.push({
            "clientId": clientId,
        })
        //start the game
        // if (game.clients.length === 4) updateGameState();

        const payLoad = {
            "method": "join",
            "game": game
        }
        //loop through all clients and tell them that people has joined
        game.clients.forEach(client => {
            clients[client.clientId].connection.send(JSON.stringify(payLoad))
        })
    }
  });
    
    socket.on("close", () => {
      console.log("Socket Disconnected");
    })
  });
}

module.exports = socketsConnection;
