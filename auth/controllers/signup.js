console.log('auth controllers users signup');
const User = require("../../models/users");
// const Users = require("../schema/usersSchema");
// use Inquire;
// const Test = db.users;
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// const mongosh = require('mongosh')
const express = require('express');
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// const router = express.Router();
// router.use(express.json());
// router.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
console.log('signup user', User)
const con = require('../conn');

exports.signup = async(req, res) => {
	try{
		console.log('try signup')
		const password = req.body.password
		const saltRounds = 10;
		// const hashPass = bcrypt.genSalt(saltRounds, function(err, salt) {
		//     bcrypt.hash(password, salt, function(err, hash) {
		//         // Store hash in your password DB.
		//     });
		// });
		const hashPass = await bcrypt.hash(password, saltRounds)
		console.log('hahsed password is ', hashPass)
		
		const user = new User({
			name:req.body.name,
			email: req.body.email,
			password: hashPass,
			contact:req.body.contact,
			DoB:req.body.DoB,
			address:req.body.address,
			roles:req.body.roles,
			status:req.body.status,
			createdBy:req.body.createdBy,
			updatedBy:req.body.updatedBy,
			createdAt:new Date(),
			updatedAt:new Date(),
		})
		console.log('new user', user)
		const save = await user.save();
		console.log('signup saver ', save)

		return res.status(200).json({
			status: 'Success',
			message: 'signup Successfully!',
			data: user
		});
	} catch (error) {
		console.log('catch error signup')
		console.log(error)
		return res.status(400).json({
			status: 'fail',
			message: 'signup fail',
			data: error
		});
	}	
}

// exports.signup = async(req, res) => {
// 	return res.status(200).json({
// 		status: 'Success',
// 		message: 'This is the signup api'
// 	});
// }

// module.exports = router;