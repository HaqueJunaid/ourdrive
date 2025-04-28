const express = require("express");
const router = express.Router();
const userModel = require("../models/user.js");

router.get("/user/signup", (req, res) => {
  res.render("Signup.ejs");
});

router.post("/user/signup", async (req, res) => {
  let { email, password, confirmPassword } = req.body;

  if (password != confirmPassword) {
    return res.json("Incorrect password");
  }

  try {
    let newUser = await new userModel({
      email: email,
      password: password,
    });

    let result = await newUser.save();

    req.session.user = {
      uId: result._id,
      uMail: result.email,
    };


    res.status(300).redirect("/drive/home");
  }
  catch (err) {
    return res.json({ "message": "Account creation failed" });;
  }
});

router.get("/user/login", (req, res) => {
  res.render("Login.ejs");
});

router.post("/user/login", async (req, res) => {
  let { email, password } = req.body;

  let rightUser = await userModel.findOne({ email: email, password: password });

  if (!rightUser) {
    return res.json({"message": "Incorrect email or password"});
  }

  req.session.user = {
    uId: rightUser._id,
    uMail: rightUser.email,
  };

  res.redirect("/drive/home");
});

module.exports = router;
