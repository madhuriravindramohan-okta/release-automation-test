const express = require('express');

const app = express();
app.use(express.json());


app.get('/hello', (req, res) => {
    res.send('Hi World!');
});

app.get('/bye', (req, res) => {
    res.send('See you again!');
});


module.exports = app;
