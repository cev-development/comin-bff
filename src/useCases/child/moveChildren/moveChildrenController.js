const { MoveChildrenUseCase } = require("./moveChildrenUseCase");

const moveChildrenUseCase = MoveChildrenUseCase();

const MoveChildrenController = () => {
  const handle = async (request, response) => {
    const { place } = request.params;
    const { childrenId } = request.body;

    await moveChildrenUseCase.execute({
      place,
      childrenId,
    });

    response.json({ message: "Updated" });
  };

  return {
    handle,
  };
};

module.exports = { MoveChildrenController };
