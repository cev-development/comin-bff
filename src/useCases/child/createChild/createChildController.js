const { CreateChildUseCase } = require("./createChildUseCase");

const createChildUseCase = CreateChildUseCase();

const CreateChildController = () => {
  const handle = async (request, response) => {
    const {  
      name,
      age,
      guardian,
      contact,
      pcd,
      sensitivity,
      literacy,
      learningDisorder,
      escort,
    } = request.body;

    const child = await createChildUseCase.execute({
      name,
      age,
      guardian,
      contact,
      pcd,
      sensitivity,
      literacy,
      learningDisorder,
      escort,
    });

    response.status(201).json(child);
  };

  return {
    handle,
  };
};

module.exports = { CreateChildController };
