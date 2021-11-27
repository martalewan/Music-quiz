const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Some blablablablabal');
});
router.get('/deeperroute', (req, res) => {
  res.send('deepy');
});

module.exports = router;
