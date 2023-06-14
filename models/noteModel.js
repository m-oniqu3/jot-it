const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    title: {
      type: String,
      required: [true, "Please enter a title"],
    },
    subtitle: {
      type: String,
      required: [true, "Please enter a subtitle"],
    },
    category: {
      type: String,
      enum: ["general", "todo", "random"],
      default: "general",
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
