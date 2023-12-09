const mongoose = require('mongoose');

const friendsSchema = mongoose.Schema({
  name: String,
  email:String,
  assignedFriend:String,
  friendName: String,
  isAssigned: { type : Boolean, default: false },
})

module.exports = mongoose.model("friends", friendsSchema)