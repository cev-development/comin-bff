const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema(
  {
    host: {
      type: String,
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
    params: {
      type: String,
      required: false,
    },
    method: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    bffVersion: {
      type: String,
      required: false,
    },
    appVersion: {
      type: String,
      required: false,
    },
    ip: {
      type: String,
      required: false,
    },
    fieldName: {
      type: String,
      required: false,
    },
    plataform: {
      type: String,
      required: false,
    },
    requestBody: {
      type: String,
      required: false,
    },
    responseBody: {
      type: String,
      required: false,
    },
    responseTime: {
      type: String,
      required: false,
    },
    stackError: {
      type: String,
      required: false,
    },
    sessionId: {
      type: String,
      required: false,
    },
    userId: {
      type: String,
      required: false,
    },
    enviroment: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Log", LogSchema);
