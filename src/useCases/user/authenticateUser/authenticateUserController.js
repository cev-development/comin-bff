const { AuthenticateUserUseCase } = require("./authenticateUserUseCase");

const authenticateUserUseCase = AuthenticateUserUseCase();

const AuthenticateUserController = () => {
  const handle = async (request, response) => {
    const { username, password } = request.body;

    const result = await authenticateUserUseCase.execute({
      username: username.toLowerCase(),
      password,
    });

    response.json(result);
  };

  return {
    handle,
  };
};

module.exports = { AuthenticateUserController };
