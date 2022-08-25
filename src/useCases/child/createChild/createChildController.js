const { CreateChildUseCase } = require("./createChildUseCase");

const createChildUseCase = CreateChildUseCase();

const CreateChildController = () => {
  const handle = (request, response) => {
    const { name, age, guardian, contact, place } = request.body;

    const child = createChildUseCase.execute({
      name,
      age,
      guardian,
      contact,
      place,
    });

    response.status(201).json(child);
  };

  return {
    handle,
  };
};

module.exports = { CreateChildController };
