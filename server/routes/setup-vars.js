const express = require('express');
const router = express.Router();

router.get('/env-url', (req, res) => {
  const prodUrl = {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
  }
  res.json(prodUrl);
})

module.exports = router;