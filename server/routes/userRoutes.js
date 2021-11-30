const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const db = require('../db/connection'); 

router.get('/users/', (req, res) => {
  res.send('main');
});

router.post('/users', (req, res, next) => {
  try {
    const uniqueId = uuidv4();    
    if(!req.body.username) {
      throw new Error('USERNAME EXPECTED')
    }
    if(!uniqueId){
      throw new Error('ID EXPECTED')
    }

    db.query(`
      INSERT INTO public."users" ("username", "password", "userId") 
      VALUES ('${req.body.username}', '', '${uniqueId}');`,
      (err, userData ) => {
        if (err) {
          return next(err)
        }
      })
    res.redirect(`/api/users/${req.body.username}`);
    } catch (err) {
    next(err); 
  }
});

router.get('/users/:username', (req, res, next) => {
  try {
    const { username } = req.params;
    const query = {
      name: 'fetch-user',
      text: 'SELECT "username", "userId" FROM public."users" WHERE "username" = $1',
      values: [username],
    }
    db.query(query, (err, userData) => {
      if (err) {
        return next(err)
      }
      res.send(userData.rows[0]);
    });
  } catch (err) {
    next(err);
  };
});

module.exports = router;
