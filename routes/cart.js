const router = require("express").Router();
const passport = require("passport");
const cart = require("../models/cart.model");


router.post("/", (req, res) => {
  Cart.findOne({ id: req.body._id }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Cart already exists");
    if (!doc) {
      const newCart = new Cart({
        belongsTo
      });
      await newCart.save();
      res.send("Cart Created");
    }
  });
});

module.exports = router