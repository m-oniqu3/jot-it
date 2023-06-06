const root = (req, res) => {
  res.render("home", { title: "Welcome" });
};

const jot_dashboard = (req, res) => {
  const menu = [
    { src: "/images/icons/overview.svg", name: "Overview" },
    { src: "/images/icons/overview.svg", name: "Overview" },
    { src: "/images/icons/overview.svg", name: "Overview" },
    {
      src: "/images/icons/overview.svg",
      name: "Overview",
      subMenu: [
        { src: "/images/icons/overview.svg", name: "Overview" },
        { src: "/images/icons/overview.svg", name: "Overview" },
        { src: "/images/icons/overview.svg", name: "Overview" },
        { src: "/images/icons/overview.svg", name: "Overview" },
      ],
    },
  ];

  res.render("dashboard", { title: "Dashboard", menu });
};

module.exports = { root, jot_dashboard };
