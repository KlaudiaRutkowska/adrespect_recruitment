'use strict';

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const host = '0.0.0.0';

app.use(express.static("public"));

app.get('/', function(req, res) {
  res.render("index");
});

app.listen(port, host);
console.log(`Server started at http://${host}:${port}`);