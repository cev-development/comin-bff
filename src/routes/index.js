const { Router } = require("express");

const { structuringRoutes } = require("./structuring.routes");
const { childRoutes } = require("./child.routes");
const { userRoutes } = require("./user.routes");

const routes = Router();

routes.use(structuringRoutes);
routes.use(childRoutes);
routes.use(userRoutes);

module.exports = { routes };
