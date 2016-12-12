import express from 'express';

const app = express();

app.get('/healthcheck', (req, res) => {
  res.send('OK');
});

app.get('/', (req, res) => {
  res.send('Hello');
});

const port = 8080;
app.listen(port);
