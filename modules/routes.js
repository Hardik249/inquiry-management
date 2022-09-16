console.log('users routes')
const express = require('express');
const users = require('./users/usersroutes');
const inquire = require('./inquire/inquireroutes');
// const users = require('../auth/controllers/user');
// const test = require("./users/controllers/controllers");
const apiRoutes = express.Router();

apiRoutes.use('/users', users);
apiRoutes.use('/inquire', inquire);
// apiRoutes.use('/users', test);
module.exports = apiRoutes;

// const test = require("./users/controllers/controllers");
// var router = require("express").Router();

// // Create a new Test
// router.post("/", test.create);

// // Retrieve all test
// router.get("users/list", test.list);

// // // Retrieve all published test
// // router.get("/published", test.findAllPublished);

// // Retrieve a getUpdate single Tutorial with id
// router.get("/:id", test.getUpdate);

// // Update a Tutorial with id
// router.put("/:id", test.update);

// // Delete a Tutorial with id
// router.delete("/:id", test.delete);

// // // Delete all test
// // router.delete("/", test.deleteAll);

// app.use('/api/test', router);


// module.exports = app => {
//   const test = require("../controllers/controllers.js");
//   var router = require("express").Router();
  
//   // Create a new Test
//   router.post("/", test.create);
  
//   // Retrieve all test
//   router.get("users/list", test.list);
  
//   // // Retrieve all published test
//   // router.get("/published", test.findAllPublished);
  
//   // Retrieve a getUpdate single Tutorial with id
//   router.get("/:id", test.getUpdate);
  
//   // Update a Tutorial with id
//   router.put("/:id", test.update);
  
//   // Delete a Tutorial with id
//   router.delete("/:id", test.delete);
  
//   // // Delete all test
//   // router.delete("/", test.deleteAll);
  
//   app.use('/api/test', router);
// };
