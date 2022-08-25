const { ListChildrenUseCase } = require("./listChildrenUseCase");

const listChildrenUseCase = ListChildrenUseCase();

const ListChildrenController = () => {
  const handle = async (request, response) => {
    const { name, guardian } = request.query;

    const children = await listChildrenUseCase.execute({ name, guardian });

    response.json(children);
  };

  return {
    handle,
  };
};

module.exports = { ListChildrenController };
