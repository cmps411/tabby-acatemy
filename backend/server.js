const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/user.model");
require("./passport/passportConfig")(passport);

require("./passport/PassportGoogleConfig");
require("dotenv").config();

const app = express();
const port = 5000;
app.use(
  cors({
    origin: "http://localhost:3000", //react app location
    credentials: true,
  })
);
//allows us to parse json!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());


// Routes

const loginRouter = require("./routes/login");
const registerRouter = require('./routes/register');
const userRouter = require('./routes/user');

app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/user", userRouter);

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
