console.log('inquire inquireroutes')
const inquireValidation = require('../../auth/services/inquireValidation')
// const test = require("../../auth/controllers/login");
const routes = require('./controllers/controllers')
const router = require("express").Router();

router.get("/list", routes.list);

module.exports = router