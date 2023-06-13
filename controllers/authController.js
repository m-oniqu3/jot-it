const jwt = require("jsonwebtoken");
const handleError = require("./../utils/errors");
const User = require("../models/userModel");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signup = (req, res) => {
  res.render("signup", { link: "/login", text: "Login", title: "Sign Up" });
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });

    const token = createToken(user._id);

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: process.env.COOKIE_EXPIRES_IN * 1000,
    });

    res.status(201).json({
      status: "success",
      token,
      data: { user: user._id },
    });
  } catch (error) {
    console.log(error);

    const errorDetails = handleError(error);
    res.status(400).json({ status: "failed", message: errorDetails });
  }
};

const login = (req, res) => {
  res.render("login", { link: "/signup", text: "Sign Up", title: "Login" });
};

const logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.redirect("/");
};

module.exports = { signup, login, createUser, logout };
