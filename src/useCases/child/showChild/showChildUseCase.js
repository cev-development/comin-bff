const Child = require("../../../models/Child");

const { appError } = require("../../../errors/appError");

const ShowChildUseCase = () => {
  const execute = async ({ childId }) => {
    const child = await Child.findById(childId);

    if (!child) throw appError("Criança não encontrada", 404);

    return child;
  };

  return {
    execute,
  };
};

module.exports = { ShowChildUseCase };
