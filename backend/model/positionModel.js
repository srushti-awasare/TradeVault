const { model } = require("mongoose");

const { positionSchema } = require("../schemas/positionSchema");

const positionModel = new model("position", positionSchema);

module.exports = positionModel;
