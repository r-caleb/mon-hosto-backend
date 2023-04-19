const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  service: { type: String, required: true },
  serviceImage: { type: String, required: false },
});

module.exports = mongoose.model("Service", serviceSchema);
