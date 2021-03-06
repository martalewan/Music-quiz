const express = require('express');
const app = require('express')();
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const cookieParser = require('cookie-parser');
const socketsConnection = require('./server/sockets')
const userRoutes = require('./server/routes/userRoutes');
const songsRoutes = require('./server/routes/songsRoutes')
const userStatsRoute = require('./server/routes/userStatsRoute');

const db = require('./server/db/connection'); 

const PORT = process.env.PORT || 9999;
const PROTOCOL = process.env.PROTOCOL || 'http://';
const HOST = process.env.HOST || 'localhost:';

const server = app.listen(PORT, '0.0.0.0', () => console.log(`Listening on port ${PROTOCOL}${HOST}${PORT}`));

socketsConnection(server);

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/queries', (req, res, next) => {
  db.query('SELECT * FROM "users"', (err, result) => {
    if(err){
      return next(err);
    }
    res.send(result.rows);
  })
});

app.use('/api', userRoutes);
app.use('/api', songsRoutes);
app.use('/api', userStatsRoute);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

module.exports = server;
