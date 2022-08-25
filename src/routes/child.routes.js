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
const {
  MoveAllChildrenHomeController,
} = require("../useCases/child/moveAllChildrenHome/moveAllChildrenHomeController");
const {
  ShowChildController,
} = require("../useCases/child/showChild/showChildController");

const { ensureAuthenticated } = require("../middlewares/ensureAuthenticated");
const { ensureAdmin } = require("../middlewares/ensureAdmin");

const createChildController = CreateChildController();
const listChildrenController = ListChildrenController();
const showChildController = ShowChildController();
const listChildrenByPlaceController = ListChildrenByPlaceController();
const moveChildrenController = MoveChildrenController();
const updateChildController = UpdateChildController();
const moveAllChildrenHomeController = MoveAllChildrenHomeController();

const childRoutes = Router();

childRoutes.get("/child", ensureAuthenticated, listChildrenController.handle);

childRoutes.get(
  "/child/:childId",
  ensureAuthenticated,
  showChildController.handle
);

childRoutes.get(
  "/child/place/:place",
  ensureAuthenticated,
  listChildrenByPlaceController.handle
);

childRoutes.post("/child", ensureAuthenticated, createChildController.handle);

childRoutes.patch(
  "/child/move/:place",
  ensureAuthenticated,
  moveChildrenController.handle
);

childRoutes.put(
  "/child/:childId",
  ensureAuthenticated,
  updateChildController.handle
);

childRoutes.patch(
  "/child/all/move/home",
  ensureAdmin,
  moveAllChildrenHomeController.handle
);

module.exports = { childRoutes };
