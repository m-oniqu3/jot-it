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

  const notes = await Note.find({ user: user._id })
    .lean()
    .sort({ createdAt: -1 });

  res.render("dashboard", { title: "Dashboard", notes, user: user.name });
};

const jot_create_get = (req, res) => {
  const user = res.locals.user;

  if (!user || !user._id) {
    return res.redirect("/login");
  }

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

const jot_details = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.send("Invalid note id");
    }

    const note = await Note.findById(id).lean();

    const newNote = {
      ...note,
      createdAt: note.createdAt?.toDateString().slice(4) || "",
      content: note.content.replace(/(?:\r\n|\r|\n)/g, "<br>"),
    };

    res.render("details", { title: "Details", note: newNote });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  root,
  jot_dashboard,
  jot_create_get,
  jot_create_post,
  jot_details,
};
