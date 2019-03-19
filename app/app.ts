import express from 'express';

const port: number = 3000;
const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});