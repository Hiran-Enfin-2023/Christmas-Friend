const htmlContent = require("../utils/template");
// const { createTransport } = require("nodemailer");

// process.on("message", async ({ selectedFriend, email }) => {

//   console.log("Main.js line on 7" ,selectedFriend);
//   console.log("mail to send" , email);
//   const message = `Your Christmas Friend is . ${selectedFriend.name}.`;

//   const transporter = createTransport({
//     host: "smtp-relay.brevo.com",
//     port: 587,
//     auth: {
//       user: "hirankvlr@gmail.com",
//       pass: "JEWmy5FqKcYd0NzD",
//     },
//   });

//   const mailOptions = {
//     from: "hirankvlr@gmail.com",
//     to: email,
//     subject: `Christmas Friend`,
//     html: htmlContent(message),
//   };

//   const sendMail = await transporter.sendMail(mailOptions);

//   console.log(sendMail);
//   process.exit(1);
// });

const nodemailer = require('nodemailer');

exports.sendEmail = async ({ selectedFriend, email }) => {
  // const { to, subject, text } = req.body;

    console.log("Main.js line on 7" ,selectedFriend);
  console.log("mail to send" , email);
  const message = `Your Christmas Friend is - ${selectedFriend.name}.`;

  const transporter = nodemailer.createTransport({
    // Configure your email service here
    service: 'gmail',
    auth: {
      user: 'hirankvlr@gmail.com',
      pass: 'yjjg ucjt qeqn dskj',
    },
  });

  const mailOptions = {
    from: 'hirankvlr@gmail.com',
    to: email,
    subject: `Christmas Friend`,
    html: htmlContent(message),
  };

  try {
    await transporter.sendMail(mailOptions);
    // res.status(200).json({ message: 'Email sent successfully!' });
    console.log("email send successfully");
  } catch (error) {
    console.error(error.message);
    // res.status(500).json({ message: 'Failed to send email.' });
  }
};