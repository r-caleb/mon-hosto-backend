const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: false, unique: true },
  password: { type: String, required: true },
  picture: { type: String, required: false },
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
