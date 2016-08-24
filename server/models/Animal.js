const mongoose = require('mongoose');
let animalSchema = new mongoose.Schema({
  name: {type: String, required: true},
  type: {type: String, required: true}, 
  age: {type: Number, required: true, min: 0},
  adopted: {type: Boolean, required: true, default: false},
  img: {type: String, required:true},
  owner: 
   {type: mongoose.Schema.Types.ObjectId, ref: 'Person'}
  
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;