console.log('models users');
// const con = require('../conn');
// const User = require('../auth/schema/usersSchema');

const mongoose = require('mongoose'); 
const User = require('../auth/schema/usersSchema');
// const User = require('.././auth/schema/usersSchema');
console.log('User schema models', User);
module.exports = mongoose.model('User', User);
// module.exports = User;
// module.exports = require('.././auth/schema/usersSchema');
// module.exports = require('.././auth/schema/usersSchema');
// const mongoose = require('mongoose'); 
// const con = require('../conn');
// const { Schema } = mongoose;


// const userSchema = new Schema({
//   name:  String, // String is shorthand for {type: String}
//   email: String,
//   password: String,
//   contact: Number,
//   DoB: Date,
//   address: String,
//   status: Number,
//   createdBy: String,
//   updatedBy: String,
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });