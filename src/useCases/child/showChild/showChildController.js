const { ShowChildUseCase } = require("./showChildUseCase");

const showChildUseCase = ShowChildUseCase();

const ShowChildController = () => {
  const handle = async (request, response) => {
    const { childId } = request.params;

    const child = await showChildUseCase.execute({
      childId,
    });

    response.json(child);
  };

  return {
    handle,
  };
};

module.exports = { ShowChildController };
