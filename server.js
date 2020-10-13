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
const Course = require("./models/course.model")
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const crypto = require("crypto");
const path = require("path");
const dotenv = require("dotenv");
require("./passport/passportConfig")(passport);
require("./passport/PassportGoogleConfig")(passport);
const restart = require("express");


dotenv.config({ path: "./config.env" });
const app = express();
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

//error check
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

conf = {

cors: {
  origin: ['https://guarded-forest-58961.herokuapp.com', 'http://localhost:3000' ],
  credentials: true
}};


app.use(cors(conf.cors));

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
const registerRouter = require("./routes/register");
const userRouter = require("./routes/user");
const coursesRouter = require("./routes/course");
const logoutRouter = require("./routes/logout");
const changeProfilePicRouter = require("./routes/changeProfilePic");

app.use("/api/login", loginRouter);
app.use("/api/register", registerRouter);
app.use("/api/user", userRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/logout", logoutRouter);
app.use("/api/changeProfilePic", changeProfilePicRouter);

app.use("/auth", require("./routes/Gauth"));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client", "build", "index.html"))
  })
}

const normalizePort = port => parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 5000);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
