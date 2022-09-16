console.log('schema userSchema')
const mongoose = require('mongoose'); 
const con = require('../conn');
const { Schema } = mongoose;
const roles = require('../middlewares/roles');

const userSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  email: String,
  password: String,
  contact: Number,
  DoB: Date,
  address: String,
  roles: {
    type: Number,
    // default: 0,
    enum: [0, 1, 2],
  },
  status: Number,
  createdBy: String,
  updatedBy: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// const User = mongoose.model('User', userSchema);

// module.exports = User
// module.exports = mongoose.model('User', userSchema);
// console.log('userSchema', userSchema)
module.exports = userSchema;
// exports.Users = class Users{
//   //

//   static get ROLE_ADMIN() {
//     return 'admin';
//   }

//   static get ROLE_HR() {
//     return 'hr';
//   }

//   static get ROLE_SALES() {
//     return 'sales';
//   }

//   //
// }

// module.exports = userSchema;