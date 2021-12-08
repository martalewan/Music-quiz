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
    wsServer.clients.forEach(client => {
      client.send(JSON.stringify({mess: 'NEW CONNECTION'}));
    })

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
        console.log('CONNECTION SET!!');
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
              "quizModerator": result.quizModerator,
          }

          // games[gameId].clients.push({
          //   clientId,
          //   "username": result.quizModerator,
          //   "isModerator": true,
          // })

          const payLoad = {
              "method": "create",
              "game": games[gameId],
              "allGames": games,
          }

          // const con = clients[clientId].connection;
          // con.send(JSON.stringify(payLoad));

          wsServer.clients.forEach(client => {
            client.send(JSON.stringify(payLoad));
          })
          // socket.send(JSON.stringify(payLoad));
      }

      if (result.method === "join") {
        const clientId = result.clientId;
        const gameId = result.gameId;
        const username = result.username;
        const game = games[gameId];
    
        games[gameId].clients.push({
            "clientId": clientId,
            "username": username,
        })

        const payLoad = {
            "method": "join",
            "game": game
        }
        // con.send(JSON.stringify(payLoad));
        //loop through all clients and tell them that people has joined
        game.clients.forEach(client => {
            clients[client.clientId].connection.send(JSON.stringify(payLoad))
        })
    }
    
    if (result.method === "startCountdown") {
      const gameId = result.gameId;
      const game = games[gameId];

      const payLoad = {
        "method": "startCountdown",
        "game": game,
        "countdown": result.countdown,
      }

      game.clients.forEach(client => {
        clients[client.clientId].connection.send(JSON.stringify(payLoad))
      })
    }

    if (result.method === "quitLobby") {
      const gameId = result.gameId;
      const game = games[gameId];

      const payLoad = {
        "method": "quitLobby",
        "game": game
      }

      game.clients.forEach(client => {
        clients[client.clientId].connection.send(JSON.stringify(payLoad))
      })
    }

    if (result.method === "goToNextSong") {
      const gameId = result.gameId;
      const game = games[gameId];
      
      const payLoad = {
        method: 'goToNextSong',
        gameId,
        clientId: result.clientId,
        songChoices: result.songChoices,
        currentSong: result.currentSong,
      }

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
