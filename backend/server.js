const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', cors(), async (req, res) => {
  res.send('This is working');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
