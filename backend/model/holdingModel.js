const { model } = require("mongoose");

const { holdingSchema } = require("../schemas/holdingSchema");

const holdingModel = new model("holding", holdingSchema);

module.exports = holdingModel;
