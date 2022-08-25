const { Router } = require("express");

const {
  CreateUserController,
} = require("../useCases/user/createUser/createUserController");
const {
  ListUsersController,
} = require("../useCases/user/listUsers/listUsersController");
const {
  UpdateUserController,
} = require("../useCases/user/updateUser/updateUserController");
const {
  AuthenticateUserController,
} = require("../useCases/user/authenticateUser/authenticateUserController");

const { ensureAdmin } = require("../middlewares/ensureAdmin");

const createUserController = CreateUserController();
const listUsersController = ListUsersController();
const updateUserController = UpdateUserController();

const authenticateUserController = AuthenticateUserController();

const userRoutes = Router();

userRoutes.get("/user", ensureAdmin, listUsersController.handle);

userRoutes.post("/user", ensureAdmin, createUserController.handle);

userRoutes.put("/user/:userId", ensureAdmin, updateUserController.handle);

userRoutes.post("/session", authenticateUserController.handle);

module.exports = { userRoutes };
