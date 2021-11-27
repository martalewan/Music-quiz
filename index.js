const express = require('express');
const app = require('express')();
const path = require('path');
require('dotenv').config();

const socketsConnection = require('./server/sockets')
const testRoute = require('./server/routes/test');

const PORT = process.env.PORT || 9090;
const HOST = process.env.HOST || 'http://localhost:';

const server = app.listen(PORT, () => console.log(`Listening on port ${HOST}${PORT}`));

socketsConnection(server);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use('/test', testRoute);

module.exports = server;
