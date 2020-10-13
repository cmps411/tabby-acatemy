const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    googleId: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      trim: true,
    },
    email: String,
    image: {type: String, default: 'https://i.imgur.com/Geb0OcA.png'},
    date: {type: Date, default: Date.now},
    tps: {type: Number, default: 0},
  },

);

const User = mongoose.model("User", userSchema);

module.exports = User;
