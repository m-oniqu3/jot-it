const signup = (req, res) => {
  res.render("signup", { link: "/login", text: "Login", title: "Sign Up" });
};

const login = (req, res) => {
  res.render("login", { link: "/signup", text: "Sign Up", title: "Login" });
};

module.exports = { signup, login };
