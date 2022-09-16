// server.js
const express = require('express');
const app = express();
const http = require('http');
const route = require('./route');
const server = http.createServer(route);

const PORT = process.env.PORT || 3001;
// const app = route();
route.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});