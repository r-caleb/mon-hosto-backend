const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const hospitalSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true, unique: true },
  picture: { type: String, required: false },
  postalCode: { type: String, required: true, unique: true },
  longitude: { type: String, required: true },
  latitude: { type: String, required: true },
  availability: { type: String, required: true },
  website: { type: String, required: false },
  status: { type: String, required: true },
  doctorNumber: { type: Number, required: true },
  specialistNumber: { type: Number, required: true },
  generalistNumber: { type: Number, required: true },
  managerID: { type: mongoose.Schema.Types.ObjectId, ref: "Manager" },
  townID: { type: mongoose.Schema.Types.ObjectId, ref: "Town" },
});
hospitalSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Hospital", hospitalSchema);
