const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    minlength: [6, "Minimum  length is 6 characters"],
    lowercase: true,
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please provide a valid email"],
    required: [true, "Please enter your email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [6, "Minimum password length is 6 characters"],
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

userSchema.statics.checkCredentials = async function (email, password) {
  // select password field because it is not selected by default
  const user = await this.findOne({ email }).select("+password");

  if (!validator.isEmail(email)) {
    throw new Error("Invalid email format");
  }

  if (!user) {
    throw Error("incorrect email");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw Error("incorrect password");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
