const express = require("express");
// require("dotenv").config();
const { signUpData: User } = require("../db.js");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "email does not exist" });
    }

    const resetToken = "bcnfefjg00";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log(process.env.EMAIL);
    console.log(process.env.EMAIL_PASSWORD);
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "password reset",
      text: `Please use the following link to reset your password: http://localhost:3000/reset-password?token=${resetToken}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send("email could not be send");
      } else {
        console.log("email sent", +info.response);
        return res.json({ msg: "password reset mail sent" });
      }
    });

    console.log(email);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
