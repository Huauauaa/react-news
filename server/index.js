const express = require('express');
const app = express();
const cors = require('cors');
const port = 8888;
app.use(cors());

app.get('/', (req, res) => {
  res.send('hi');
});

app.get('/a', (req, res) => {
  res.status(200).json({ data: 'a' });
});

app.get('/error', (req, res) => {
  res.status(500).json({ data: 'Something wrong!' });
});

app.listen(port, () => {
  console.log(`running on http://localhost:${port}`);
});
