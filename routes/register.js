const router = require("express").Router();
const passport = require("passport");
require("../passport/passportConfig")(passport);
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

router.post("/", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

module.exports = router