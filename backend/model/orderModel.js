const { model } = require("mongoose");

const { orderSchema } = require("../schemas/orderSchema");

const orderModel = new model("Order", orderSchema);

module.exports = orderModel;
