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
      required: true,
    },
    literacy:  {
      type: Boolean,
      required: true,
    },
    learningDisorder:  {
      type: Boolean,
      required: true,
    },
    escort: {
      type: Boolean,
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
