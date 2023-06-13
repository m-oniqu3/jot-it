const jwt = require("jsonwebtoken");

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

module.exports = protectRoute;
