const http = require('http');
const app = require('express')();
require('dotenv').config();
const socketsConnection = require('./sockets')

const testRoute = require('./routes/test');

const PORT = process.env.PORT || 9090;
const HOST = process.env.HOST || 'http://localhost:';

const server = app.listen(PORT, () => console.log(`Listening on port ${HOST}${PORT}`));

socketsConnection(server);

app.use('/test', testRoute);

module.exports = server;
