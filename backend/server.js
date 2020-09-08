const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocal = require("passport-local");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:3000", //react app location
    credentials: true,
  })
);
//allows us to parse json!
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
// Routes
app.post("/login", (req, res) => {
  console.log(req.body);
});

app.post("/register", (req, res) => {
  console.log(req.body);
});

app.get("/user", (req, res) => {
  console.log(req.body);
});

//from .env file
const uri = process.env.ATLAS_URI;

// The object passed in here (after uri) is just to remove deprecation warnings
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//start server!
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
