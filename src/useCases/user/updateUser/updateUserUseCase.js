const { hash } = require("bcrypt");
const User = require("../../../models/User");

const { appError } = require("../../../errors/appError");

const UpdateUserUseCase = () => {
  const execute = async ({ userId, name, username, password }) => {
    const userFinded = await User.findOne({ username });
    if (userFinded && userFinded._id != userId)
      throw appError("Já existe um usuario com essas username");

    const passwordHash = await hash(password, 8);

    await User.findByIdAndUpdate(userId, {
      name,
      username: username.toLowerCase(),
      password: passwordHash,
    });

    return User.findById(userId);
  };

  return {
    execute,
  };
};

module.exports = { UpdateUserUseCase };
