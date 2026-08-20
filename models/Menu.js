const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant"
  },

  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  isAvailable: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Menu", menuSchema);