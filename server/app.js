// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users.js");
const loginAuth = require("./routes/loginAuth.js");
const resetPassword = require("./routes/resetPassword.js");
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  methods: "POST",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/loginAuth", loginAuth);
app.use("/api/resetPassword", resetPassword);

const PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/dbPractice")
  .then(() => {
    console.log("Database is connected");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });
