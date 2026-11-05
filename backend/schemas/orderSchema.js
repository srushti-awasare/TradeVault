const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  name: String,
  qty: Number,
  price: Number,
  mode: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = { orderSchema };
