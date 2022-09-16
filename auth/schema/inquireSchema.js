console.log('schema inquireSchema')
const mongoose = require('mongoose'); 
const con = require('../conn');
const { Schema } = mongoose;


const inquireSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  description: String,
  status: Number,
  createdBy: String,
  updatedBy: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

Inquire = mongoose.model('Inquire', inquireSchema);
module.exports = Inquire;