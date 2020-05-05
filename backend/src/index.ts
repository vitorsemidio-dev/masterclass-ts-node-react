import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.send('haha World');
})

app.listen(3333);
