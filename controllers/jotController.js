const root = (req, res) => {
  res.render("home", { title: "Welcome" });
};

const jot_dashboard = (req, res) => {
  res.render("dashboard", { title: "Dashboard" });
};

const jot_create = (req, res) => {
  res.render("create", { title: "Create" });
};

module.exports = { root, jot_dashboard, jot_create };
