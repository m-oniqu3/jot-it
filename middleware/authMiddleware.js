const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protectRoute = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.redirect("/login");
  }

  //verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.redirect("/login");
    }

    return next();
  });
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    res.locals.user = null;
    return next();
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    if (err) {
      console.log(err.message);
      res.locals.user = null;
      return next();
    }

    let user = await User.findById(decodedToken.id);

    res.locals.user = user;
    return next();
  });
};

const checkLoggedIn = (req, res, next) => {
  const user = res.locals.user;

  if (!user) {
    return next();
  }

  return res.redirect("/jots");
};

module.exports = { protectRoute, checkLoggedIn, checkUser };
