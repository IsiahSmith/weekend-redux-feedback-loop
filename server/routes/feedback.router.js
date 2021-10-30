const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//SERVER SIDE GET
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "feedback";')
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('Error in server GET', error);
            res.sendStatus(500);
        });
}); //End GET

//SERVER SIDE POST
router.post('/', (req, res) => {
    let feedback = req.body;
    let queryText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)
;`;
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then(result => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('Error in server POST', error);
            res, sendStatus(500);
        });
}); //End POST

module.exports = router;