const User = require("../../../models/User");

const ListUsersUseCase = () => {
  const execute = async ({ name }) => {
    if (!name) return User.find();

    return User.find({ name: { $regex: ".*" + name + ".*", $options: "i" } });
  };

  return {
    execute,
  };
};

module.exports = { ListUsersUseCase };
