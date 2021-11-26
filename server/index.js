const http = require("http");
const app = require("express")();
const testRoute = require('./routes/test');

app.listen(9091, () => console.log("Listening on http port 9091"))
const websocketServer = require("websocket").server
const httpServer = http.createServer();
httpServer.listen(9090, () => console.log("Listening.. on 9090"))

const wsServer = new websocketServer({
  "httpServer": httpServer
})

console.log('bananananananana')

app.use('/test', testRoute )

wsServer.on("request", request => {
  //connect
  const connection = request.accept(null, request.origin);
  connection.on("open", () => console.log("opened!"))
  connection.on("close", () => console.log("closed!"))
  connection.on("message", message => {
    // Some logic
  })
})