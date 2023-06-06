const signup = (req, res) => {
  res.render("signup", { link: "/login", text: "Login" });
};

const login = (req, res) => {
  res.render("login", { link: "/signup", text: "Sign Up" });
};

module.exports = { signup, login };
