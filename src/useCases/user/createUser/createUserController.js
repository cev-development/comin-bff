const { CreateUserUseCase } = require("./createUserUseCase");

const createUserUseCase = CreateUserUseCase();

const CreateUserController = () => {
  const handle = async (request, response) => {
    const { name, username, password } = request.body;

    const user = await createUserUseCase.execute({
      name,
      username,
      password,
    });

    response.status(201).json(user);
  };

  return {
    handle,
  };
};

module.exports = { CreateUserController };
