require('dotenv').config();

const express = require('express');
const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('Welcome to Twitter!');
});

app.get('/wasi', (req, res) => {
  res.send('<h1>Wasi Edit backend</h1>');
});

app.get('/Youtube', (req, res) => {
  res.send('WR Gaming');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
