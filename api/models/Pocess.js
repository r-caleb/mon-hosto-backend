const mongoose = require("mongoose");

const pocessSchema = mongoose.Schema({
  hospitalID: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
  serviceID: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
});

module.exports = mongoose.model("Pocess", pocessSchema);
