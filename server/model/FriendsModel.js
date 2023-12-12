const mongoose = require('mongoose');

const friendsSchema = mongoose.Schema({
  name: String,
  email:String,
  assignedFriend:String,
  friendName: String,
  isAssigned: { type : Boolean, default: false },
  iamFriendOf : String,
  
})

module.exports = mongoose.model("friends", friendsSchema)