const mongoose = require("mongoose");

const ChildSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    guardian: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Child", ChildSchema);
