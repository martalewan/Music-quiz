const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const musicPath = path.resolve(__dirname, '../db/music');
const musicFolder = fs.readdirSync(musicPath);
const randomizeSongs = require('../db/songs-handler');

router.get('/songs', (req, res) => {
  const randomizedSongs = randomizeSongs(musicFolder);
  res.send(randomizedSongs);
})

router.get('/songs/stream', (req, res) => {
  const songFile = req.body.songFile;
  const filePath = `../db/music/${songFile}`;
  console.log(songFile)
  const stat = fs.statSync(filePath);

  response.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Content-Length': stat.size
  });

  const readStream = fs.createReadStream(filePath);
  // We replaced all the event handlers with a simple call to readStream.pipe()
  readStream.pipe(res);
})

module.exports = router;
