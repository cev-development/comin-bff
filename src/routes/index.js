const { Router } = require("express");

const { structuringRoutes } = require("./structuring.routes");
const { childRoutes } = require("./child.routes");

const routes = Router();

routes.use(structuringRoutes);
routes.use(childRoutes);

module.exports = { routes };
