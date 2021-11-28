const express = require('express');
const app = require('express')();
const path = require('path');
require('dotenv').config();

const socketsConnection = require('./server/sockets')
const testRoute = require('./server/routes/test');
const setupVars = require('./server/routes/setup-vars');

const db = require('./server/db/connection'); 

const PORT = 9999;
const PROTOCOL = process.env.PROTOCOL || 'http://';
const HOST = process.env.HOST || 'localhost:';

const server = app.listen(PORT, () => console.log(`Listening on port ${PROTOCOL}${HOST}${PORT}`));

socketsConnection(server);

app.use(express.static(path.join(__dirname, 'dist')));

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

app.get('/queries', (req, res, next) => {
  db.query('SELECT * FROM "users"', (err, result) => {
    if(err){
      return next(err);
    }
    console.log('DB_INTRO_QUERY: ', result.rows);
    res.send(result.rows);
  })
});

app.use('/test', testRoute);
app.use('/setup-vars', setupVars);

module.exports = server;
