const express = require("express");
const bcrypt = require("bcrypt");
const { signUpData: User } = require("../db.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = new User({
      username,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.send("User registered");
  } catch (err) {
    // console.error(err.message);
    // res.status(500).send("Server error");
  }
});

module.exports = router;
