const { Router } = require("express");

const { name, version } = require("../../package.json");

const structuringRoutes = Router();

structuringRoutes.get("/", (req, res) => {
  res.json({ name, version });
});

module.exports = { structuringRoutes };
