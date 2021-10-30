const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const pool = require('./modules/pool');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
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

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});