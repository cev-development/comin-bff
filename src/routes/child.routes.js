const { Router } = require("express");

const {
  CreateChildController,
} = require("../useCases/child/createChild/createChildController");

const createChildController = CreateChildController();

const childRoutes = Router();

childRoutes.post("/child", createChildController.handle);

module.exports = { childRoutes };
