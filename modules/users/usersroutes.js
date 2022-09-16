console.log('users usersroutes')
// const express = require('express');
// const auth = require('../../lib/auth');
// const ListUsers = require('./controllers/ListUsers');

// const apiRoutes = express.Router();
// apiRoutes.post('/', async (request, response) => new CreateUser(request.db).handle(request, response));
// module.exports = app => {

// 	// const express = require('express');
// 	const test = require("../../auth/controllers/user");
// 	const router = require("express").Router();

// 	// Retrieve all test
// 	router.get("/list", test.list);
// }
const loginValidation = require('../../auth/services/loginValidation')
const signup = require("../../auth/controllers/signup");
const login = require("../../auth/controllers/login");
const list = require("../../auth/controllers/list");
const middleware = require("../../auth/middlewares/roles");
const routes = require('./controllers/controllers')
const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(
  express.urlencoded({
    extended: true,
  })
);
// Retrieve all test
// apiRoutes.post('/', async (request, response) => new CreateUser(request.db).handle(request, response));
// router.post('/login', async (request, response) => new test.login(request.db).handle(request, response));
// router.post("/login", async (request, response) => test.login(request.db).handle(request, response));
// router.post("/login", async (request, response) => test.login(request.db));
// router.post("/login", loginValidation, test.login);
// router.post("/signup", signup.signup);
router.post("/signup", (request,response)=> signup.signup());
router.post("/login", middleware, login.login);
router.get("/list", list.list);

module.exports = router