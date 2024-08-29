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
    pcd: {
      type: String | null,
      required: false,
    },
    sensitivity: {
      type: String | null,
      required: false,
    },
    literacy:  {
      type: String,
      required: true,
    },
    learningDisorder:  {
      type: String,
      required: true,
    },
    escort: {
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
