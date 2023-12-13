const mongoose = require('mongoose');

const friendsSchema = mongoose.Schema({
  name: String,
  email:String,
  password: String,
  assignedFriend:String,
  friendName: String,
  isAssigned: { type : Boolean, default: false },
  iamFriendOf : String,
  isVisited: { type : Boolean, default: false },
})

module.exports = mongoose.model("friends", friendsSchema)