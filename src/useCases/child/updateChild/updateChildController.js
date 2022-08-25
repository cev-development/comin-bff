const { UpdateChildUseCase } = require("./updateChildUseCase");

const updateChildUseCase = UpdateChildUseCase();

const UpdateChildController = () => {
  const handle = async (request, response) => {
    const { childId } = request.params;
    const { name, age, guardian, contact } = request.body;

    const child = await updateChildUseCase.execute({
      childId,
      name,
      age,
      guardian,
      contact,
    });

    response.json(child);
  };

  return {
    handle,
  };
};

module.exports = { UpdateChildController };
