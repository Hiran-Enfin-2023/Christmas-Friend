const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const FriendsModel = require("./model/FriendsModel");
require("dotenv").config()
const app = express();
const PORT =  process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(
    process.env.MONGODB_URL
  )
  .then(() => {
    console.log("Connected ot mongodb successfully");
  })
  .catch((err) => console.log(err));
app.get("/",(req,res)=>{
  res.send("success")
  console.log("Sucess");
})
app.post("/assignFriend", async (req, res) => {
  const { email } = req.body;

  if(email === ""){
    return res.status(400).json({ error: "Please enter email" });
  }
  // Check if the user already has an assigned friend
  const existingEmployee = await FriendsModel.findOne({ email });
  if (!existingEmployee) {
    return res.status(400).json({ error: "Please enter valid email address" });
  }
  if (existingEmployee.assignedFriend) {
    return res.status(400).json({
      error:
        "You already have an assigned friend" +
        " - " +
        existingEmployee.friendName,
    });
  }

  // Get a random available friend
  const availableFriends = await FriendsModel.find({
    email: { $ne: email },
    isAssigned: false,
  });

  // console.log(availableFriends);



  if (availableFriends.length === 0) {
    return res.status(400).json({ error: "All friends have been assigned." });
  }

  const randomIndex = Math.floor(Math.random() * availableFriends.length);

  const selectedFriend = availableFriends[randomIndex];

  // console.log(selectedFriend);

  
  // // Assign the friend to the user
  await FriendsModel.updateOne( 
    { email },
    {
      $set: {
        assignedFriend: selectedFriend.email,
        friendName: selectedFriend.name,
      },
    }
  );
  await FriendsModel.updateOne(
    {email: selectedFriend.email},
    {
      $set: {
        isAssigned: true
      },
    }
  )

  res.json({ friend: selectedFriend.name });
});

//add new employeee

app.post("/addEmployee", async (req, res) => {
  const { name, email } = req.body;

  try {
    //   // Check if the employee with the given email already exists
    const existingEmployee = await FriendsModel.findOne({ email: email });
    if (existingEmployee) {
      return res 
        .status(400)
        .json({ error: "Employee with this email already exists." });
    }

    //   // Create a new employee
    const newEmployee = new FriendsModel({
      name,
      email,
    });

    //   // Save the new employee to the database
    await newEmployee.save();

    res.json({ message: "Employee added successfully." });
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
