
require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, err => {
  if (err) throw err;
  console.log('Server running on port: ', PORT);
});
