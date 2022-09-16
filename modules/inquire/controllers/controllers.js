console.log('inquire controllers controllers')
const db = require("../../../models/inquire");
const Test = db.Inquire;
const express = require('express');
// const User = require('../../auth/controllers/user');

const apiRoutes = express.Router();

// apiRoutes.get('/', async (request, response) => new User(request.db).handle(request, response));

// module.exports = function list() {}
// Retrieve all test from the database.
exports.list = (req, res) => {
	return res.status(200).json({
		status: 'Success',
		message: 'This is inquire the list api'
	});
};