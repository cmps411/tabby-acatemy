const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//allows us to parse json!
app.use(express.json());

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
