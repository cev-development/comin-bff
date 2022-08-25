const { Router } = require("express");

const {
  CreateChildController,
} = require("../useCases/child/createChild/createChildController");
const {
  ListChildrenController,
} = require("../useCases/child/listChildren/listChildrenController");
const {
  ListChildrenByPlaceController,
} = require("../useCases/child/listChildrenByPlace/listChildrenByPlaceController");
const {
  MoveChildrenController,
} = require("../useCases/child/moveChildren/moveChildrenController");
const {
  UpdateChildController,
} = require("../useCases/child/updateChild/updateChildController");

const createChildController = CreateChildController();
const listChildrenController = ListChildrenController();
const listChildrenByPlaceController = ListChildrenByPlaceController();
const moveChildrenController = MoveChildrenController();
const updateChildController = UpdateChildController();

const childRoutes = Router();

childRoutes.get("/child", listChildrenController.handle);
childRoutes.get("/child/place/:place", listChildrenByPlaceController.handle);
childRoutes.post("/child", createChildController.handle);
childRoutes.patch("/child/move/:place", moveChildrenController.handle);
childRoutes.put("/child/:childId", updateChildController.handle);

module.exports = { childRoutes };
