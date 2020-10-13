const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    belongsTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique:true,
    },
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;