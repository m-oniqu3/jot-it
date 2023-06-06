const signup = (req, res) => {
  res.render("signup", { link: "/signup", text: "Login" });
};

const login = (req, res) => {
  res.render("login", { link: "/login", text: "Sign Up" });
};

module.exports = { signup, login };
