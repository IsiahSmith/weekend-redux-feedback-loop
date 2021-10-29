const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Router } = require('express');
const pool = require('./modules/pool');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
Router.get('/', (req, res) => {
    pool.query('SELECT * FROM "feedback";')
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('Error in server GET', error);
        res.sendStatus(500);
    });
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});