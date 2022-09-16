console.log('auth controllers users list')
const User = require("../../models/users");
// const Test = db.User;
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// const mongosh = require('mongosh')

exports.list = async(req, res) => {
	try{
		console.log('try list')
		const users = await User.find({}).lean()
		return res.status(200).json({
			status: 'Success',
			message: 'This is the users list api',
			data: users
		});
	} catch (error) {
		console.log('catch error list')
		console.log(error)
		return res.status(404).json({
			status: 'fail',
			message: 'list not found',
			data: error
		})
	}
}