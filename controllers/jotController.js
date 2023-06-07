const root = (req, res) => {
  res.render("home", { title: "Welcome" });
};

const jot_dashboard = (req, res) => {
  const menu = [
    { src: "/images/icons/overview.svg", name: "Overview" },
    { src: "/images/icons/new.svg", name: "New Note" },
    {
      src: "/images/icons/categories.svg",
      name: "Categories",
      subMenu: [
        { src: "/images/icons/general.svg", name: "General" },
        { src: "/images/icons/todo.svg", name: "Todo" },
        { src: "/images/icons/resources.svg", name: "Resources" },
        { src: "/images/icons/reminders.svg", name: "Reminders" },
      ],
    },
  ];

  res.render("dashboard", { title: "Dashboard", menu });
};

module.exports = { root, jot_dashboard };
