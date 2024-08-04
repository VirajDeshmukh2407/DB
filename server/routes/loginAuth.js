const express = require("express");
const bcrypt = require("bcrypt");
const { signUpData: User } = require("../db.js");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400);
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, "abcdefgh0000", { expiresIn: "1h" });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    // res.status(500).send("Server error");
  }
});

module.exports = router;
