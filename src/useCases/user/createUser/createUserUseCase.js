const { hash } = require("bcrypt");
const User = require("../../../models/User");

const { appError } = require("../../../errors/appError");

const CreateUserUseCase = () => {
  const execute = async ({ name, username, password }) => {
    const alreadyExists = await User.findOne({ username });
    if (alreadyExists)
      throw appError("usuario já cadastrado com esse username");

    const passwordHash = await hash(password, 8);

    const user = await User.create({
      name,
      username: username.toLowerCase(),
      password: passwordHash,
    });

    return user;
  };

  return {
    execute,
  };
};

module.exports = { CreateUserUseCase };
