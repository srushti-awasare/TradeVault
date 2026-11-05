const mongoose = require("mongoose");

const fundsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  availableBalance: {
    type: Number,
    default: 100000, // Demo starting balance
  },
});

module.exports = mongoose.model("Funds", fundsSchema);
