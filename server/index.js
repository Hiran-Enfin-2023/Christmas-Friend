const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcyrpt = require("bcryptjs");
const cors = require("cors");
const FriendsModel = require("./model/FriendsModel");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const { fork } = require("child_process");
const { sendEmail } = require("./utils/Mail");
// app.use(cors(
//   {
//     origin : ["https://enfin-christmas.vercel.app"],
//     methods : ["GET", "POST"],
//     credentials : true,
//   }
// ));

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://hiranraj:Hiran2001@cluster0.6pnihvs.mongodb.net/ChristmasFriend?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected ot mongodb successfully");
  })
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("success");
  console.log("Sucess");
});
app.post("/assignFriend", async (req, res) => {
  const { email, password } = req.body;
  let availableFriends;
  if (email === "") {
    return res.status(400).json({ error: "Please enter email" });
  }

  // Check if the user already has an assigned friend
  const existingEmployee = await FriendsModel.findOne({ email });
  if (!existingEmployee) {
    return res.status(400).json({ error: "Please enter valid email address" });
  }
  // const isPasswordValid = await bcyrpt.compare(
  //   req.body.password,
  //   existingEmployee.password
  // );
  if (existingEmployee.password === req.body.password) {
    if (existingEmployee.assignedFriend || existingEmployee.isVisited) {
      return res.status(400).json({
        error: "You have already selected your friend" + " " +  existingEmployee.friendName,
      });
    }
    const { iamFriendOf } = existingEmployee;
    // Get a random available friend
    if (iamFriendOf) {
      // console.log(iamFriendOf, "is assigned");
      availableFriends = await FriendsModel.find({
        $and: [{ email: { $ne: email } }, { email: { $ne: iamFriendOf } }],
        isAssigned: false,
      });
    } else {
      // console.log("no one is assigned");
      availableFriends = await FriendsModel.find({
        email: { $ne: email },
        isAssigned: false,
      });
    }

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
          isVisited: true,
        },
      }
    );
    await FriendsModel.updateOne(
      { email: selectedFriend.email },
      {
        $set: {
          isAssigned: true,
          iamFriendOf: email,
        },
      }
    );

    res.json({ friend: selectedFriend.name });
  }else{
    return res.status(400).json({ error: "Please enter correct password" });
  }
});

//add new employeee

app.post("/addEmployee", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //   // Check if the employee with the given email already exists
    if (!email || !password) {
      return res.status(400).json({ error: "Please enter credentials." });
    }
    const existingEmployee = await FriendsModel.findOne({ email: email });
    if (existingEmployee) {
      return res
        .status(400)
        .json({ error: "Employee with this email already exists." });
    } else {
      // const salt = bcyrpt.genSaltSync(12);
      // const passwordHashed = bcyrpt.hashSync(req.body.password, salt);
      //   // Create a new employee
      const newEmployee = new FriendsModel({
        name,
        email,
        password: password+"@2023",
      });
      await newEmployee.save();
    }

    //   // Save the new employee to the database

    res.json({ message: "Employee added successfully." });
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
