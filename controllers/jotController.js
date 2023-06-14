const Note = require("../models/noteModel");
const { handleNoteError } = require("../utils/errors");

const root = (req, res) => {
  res.render("home", { title: "Welcome" });
};

const jot_dashboard = async (req, res) => {
  const user = res.locals.user;

  console.log("dashboard user", user);

  if (!user || !user._id) {
    return res.redirect("/login");
  }

  console.log("user", user);

  const notes = await Note.find({ user: user._id })
    .lean()
    .sort({ createdAt: -1 });

  res.render("dashboard", { title: "Dashboard", notes, user: user.name });
};

const jot_create_get = (req, res) => {
  res.render("create", { title: "Create" });
};

const jot_create_post = async (req, res) => {
  try {
    const user = res.locals.user;
    console.log("user", user);
    if (!user._id) {
      return res
        .status(401)
        .json({ status: "failed", message: "User not authenticated" });
    }

    console.log(req.body, user);
    const { title, subtitle, category, content } = req.body;

    const data = {
      user: user._id,
      title,
      subtitle,
      category,
      content,
    };

    const note = await Note.create(data);

    res.status(201).json({ status: "success", data: { note } });
  } catch (error) {
    console.log(error);

    const errorDetails = handleNoteError(error);

    res.status(400).json({ status: "failed", message: errorDetails });
  }
};

module.exports = { root, jot_dashboard, jot_create_get, jot_create_post };
