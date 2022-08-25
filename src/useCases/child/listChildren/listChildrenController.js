const { ListChildrenUseCase } = require("./listChildrenUseCase");

const listChildrenUseCase = ListChildrenUseCase();

const ListChildrenController = () => {
  const handle = async (request, response) => {
    const { name } = request.query;

    const children = await listChildrenUseCase.execute({ name });

    response.json(children);
  };

  return {
    handle,
  };
};

module.exports = { ListChildrenController };
