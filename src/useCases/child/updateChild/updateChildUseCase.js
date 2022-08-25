const Child = require("../../../models/Child");

const { appError } = require("../../../errors/appError");

const UpdateChildUseCase = () => {
  const execute = async ({ childId, name, age, guardian, contact }) => {
    const childFinded = await Child.findOne({ name, age, guardian });
    if (childFinded && childFinded._id != childId)
      throw appError("Já existe uma criança com essas informações");

    await Child.findByIdAndUpdate(childId, {
      name,
      age,
      guardian,
      contact,
    });

    return Child.findById(childId);
  };

  return {
    execute,
  };
};

module.exports = { UpdateChildUseCase };
