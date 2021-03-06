const express = require('express');
const router = express.Router();
const db = require('../db/connection');

const getUserID = (username, next) => {
  const query = {
    name: 'fetch-user',
    text: 'SELECT "username", "userId" FROM public."users" WHERE "username" = $1',
    values: [username],
  }
  return new Promise((resolve, reject) => { 
    db.query(query, (err, statsData) => {
      if (err) {
        reject();
        return next(err);
      }
      resolve(statsData.rows[0].userId);
    })
  });
};

router.post('/users/stats/high-scores', async (req, res, next) => {
  try {
    const { username } = req.body;
    const userId = await getUserID(username, next);
    db.query(`
      INSERT INTO public."high-scores"(
      "userId", "score", "username", "averageTime") VALUES ('${userId}', '${req.body.totalPoints}', '${username}', '${req.body.averageTotalTime}');`,
    err => {
        if (err) {
          return next(err);
        }
        res.end();
      }
    );
  } catch (err) {
    next(err);
  }
});

router.post('/users/stats', async (req, res, next) => {
  try {
    const { username } = req.body;
    const userId = await getUserID(username, next);
    db.query(`
      INSERT INTO public."user-stats"(
      "userId", "totalPoints", "averageTime", "username") VALUES ('${userId}', '${req.body.totalPoints}', '${req.body.averageTotalTime}', '${username}');`,
      err => {
        if (err) {
          return next(err)
        }
        res.redirect(`/api/users/stats/${userId}`);
      }
    );
    } catch (err) {
    next(err); 
  }
});

router.get('/users/stats/:userId', (req, res, next) => {
  try {
    const { userId } = req.params;
    const query = {
      name: 'fetch-stats',
      text: 'SELECT  "_id", "totalPoints", "averageTime", "username" FROM public."user-stats" WHERE "userId" = $1',
      values: [userId],
    }
    db.query(query, (err, userData) => {
      if (err) {
        return next(err)
      }
      res.send(userData.rows);
    });
  } catch (err) {
    next(err);
  }
});

router.get('/users/stats/high-scores/top-10', (_, res, next) => {
  try {
    db.query(`
      SELECT * FROM public."high-scores"
      ORDER BY "score" DESC FETCH FIRST 10 ROWS ONLY;`,
      (err, userData) => {
        if (err) {
          return next(err);
        }
        res.json(userData);
      }
    );
  } catch (err) {
    next(err);
  }
});

module.exports = router;
