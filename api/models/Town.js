const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const townSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
});
townSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Town", townSchema);
