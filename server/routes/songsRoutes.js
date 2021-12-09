const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const musicPath = path.resolve(__dirname, '../db/music');
const musicFolder = fs.readdirSync(musicPath);
const randomizeSongs = require('../db/songs-handler');

router.get('/songs', (req, res) => {
  let randomizedSongs = randomizeSongs(musicFolder);
  const randomizedSongsName = randomizedSongs.map(song => song.replace(/.mp3/, ''));
  res.send(randomizedSongsName);
})

router.get('/songs/stream', (req, res) => {
  const songFile = req.headers.songfile;
  const filePath = path.resolve(__dirname, '../db/music', songFile);
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Content-Length': stat.size
  });

  const readStream = fs.createReadStream(filePath);
  
  readStream.on('open', () => {
    readStream.pipe(res);
  });

  readStream.on('error', err => {
    res.end(err);
  });
});

module.exports = router;
