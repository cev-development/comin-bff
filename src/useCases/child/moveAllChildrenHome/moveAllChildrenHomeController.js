const { MoveAllChildrenHomeUseCase } = require("./moveAllChildrenHomeUseCase");

const moveAllChildrenHomeUseCase = MoveAllChildrenHomeUseCase();

const MoveAllChildrenHomeController = () => {
  const handle = async (request, response) => {
    await moveAllChildrenHomeUseCase.execute();

    response.json({ message: "Updated" });
  };

  return {
    handle,
  };
};

module.exports = { MoveAllChildrenHomeController };
