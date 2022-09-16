const express = require("express");
const app = express();
const { body, validationResult } = require('express-validator');
const bodyparser = require('body-parser');

const api = require('./modules/routes');

// app.use(bodyparser.json({ limit: '10mb' }));
// app.use(bodyparser.urlencoded({ extended: false }));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// app.use("/", (req, res) => {
//   return res.status(200).json({ 
//     status: "Success",
//     message: "Hello from Express!" 
//   });
// });

app.use('/api', api);

//if route not found 
app.use((req, res, next) => {
  return res.status(400).json({
    status: 'fail',
    message: 'bad request'
  })
});

app.use('/api', api);

module.exports = app;