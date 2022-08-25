const { ListUsersUseCase } = require("./listUsersUseCase");

const listUsersUseCase = ListUsersUseCase();

const ListUsersController = () => {
  const handle = async (request, response) => {
    const { name } = request.query;

    const users = await listUsersUseCase.execute({ name });

    response.json(users);
  };

  return {
    handle,
  };
};

module.exports = { ListUsersController };
