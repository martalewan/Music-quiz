const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('main')
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.json(JSON.stringify(req.body));
})

router.get('/:id', (req, res) => {
  res.send('')
})

module.exports = router;
