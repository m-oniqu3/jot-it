const root = (req, res) => {
  res.render("home", { title: "Welcome" });
};

module.exports = { root };
