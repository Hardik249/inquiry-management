console.log('auth controllers users login')
const db = require("../../models/users");
const Test = db.User;
const bcrypt = require('bcrypt');


// // Create and Save a new Test
// exports.create = (req, res) => {
  
// };

// Retrieve all test from the database.
exports.login = (req, res) => {
	// try{
	// 	const password = req.body.password
	// 	const saltRounds = 10;
	// 	const hashPass = bcrypt.genSalt(saltRounds, function(err, salt) {
	// 	    bcrypt.hash(password, salt, function(err, hash) {
	// 	        // Store hash in your password DB.
	// 	    });
	// 	});
	// 	const user = Test.find({
	// 		email: req.body.email,
	// 		password: hashPass
	// 	})
	// 	return res.status(200).json({
	// 		status: 'Success',
	// 		message: 'This is the login api',
	// 		data: user
	// 	});
	// } catch (error) {
	// 	// return res.status(400).json({
	// 	// 	status: 'fail',
	// 	// 	message: error
	// 	// });
	// }
	return res.status(200).json({
		status: 'Success',
		message: 'This is the login api'
	});
};

// // Update a Test by the id in the request
// exports.update = (req, res) => {
  
// };

// // Find a getUpdate single Test with an id
// exports.getUpdate = (req, res) => {
  
// };

// // Delete a Test with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// module.exports = async function createUser(request) {
// 	// body...
// 	return response.status(200).json({
// 		status: 'Success',
// 		message: 'This is the createUser api'
// 	});
// }