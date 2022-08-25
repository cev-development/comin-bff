const { UpdateUserUseCase } = require("./updateUserUseCase");

const updateUserUseCase = UpdateUserUseCase();

const UpdateUserController = () => {
  const handle = async (request, response) => {
    const { userId } = request.params;
    const { name, username, password } = request.body;

    const user = await updateUserUseCase.execute({
      userId,
      name,
      username,
      password,
    });

    response.json(user);
  };

  return {
    handle,
  };
};

module.exports = { UpdateUserController };
