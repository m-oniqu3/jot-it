const User = require("../models/userModel");

const handleError = (err) => {
  let errorObject = { name: "", email: "", password: "" };

  //duplicate error code
  if (err.code === 11000) {
    errorObject.email = "That email is already registered";
    return errorObject;
  }

  // validation errors
  // get the values then loop over them
  if (err.name === "ValidationError") {
    Object.values(err.errors).forEach((error) => {
      errorObject[error.path] = error.message;
    });
  }

  return errorObject;
};

const signup = (req, res) => {
  res.render("signup", { link: "/login", text: "Login", title: "Sign Up" });
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    console.log(name, email, password);

    res.status(201).json({ userId: user._id });
  } catch (error) {
    console.log(error);

    const errorDetails = handleError(error);
    res.status(400).json({ error: errorDetails });
  }
};

const login = (req, res) => {
  res.render("login", { link: "/signup", text: "Sign Up", title: "Login" });
};

module.exports = { signup, login, createUser };
