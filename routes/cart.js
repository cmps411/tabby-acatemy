const router = require("express").Router();
const passport = require("passport");
const cart = require("../models/cart.model");
const bcrypt = require("bcryptjs");

router.post("/", (req, res) => {
  Cart.findOne({ _id: id }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Cart already exists");
    if (!doc) {
      const newCart = new Cart({
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