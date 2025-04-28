require("dotenv").config();
const express = require("express");
const app = express();
const userRoute = require("./routes/user.route.js");
const homeRoute = require("./routes/home.route.js");
const DB = require("./utilities/DB.js");
const session = require("express-session");

DB().then(res => {
    console.log("Connnected successfully");
}).catch(err => {
    console.log("Connection failed", err);
})

const sessionOptions = {
  secret: process.env.SECRET,
  resave: false,
    saveUninitialized: false,
    cookie: {
        expire: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
  }
};

app.set("view engine", "ejs");
app.set("views", __dirname + "/views")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionOptions))
app.use((req, res, next) => {
    next();
})

app.use("/drive", userRoute);
app.use("/drive", homeRoute);

app.use("/", (req, res) => {
  res.status(404).render("error.ejs");
});

app.listen(8080, () => console.log("Running at 8080"));
