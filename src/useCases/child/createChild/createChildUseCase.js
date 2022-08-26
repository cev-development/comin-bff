const Child = require("../../../models/Child");
const placesEnum = require("../../../enums/placesEnum");
const { appError } = require("../../../errors/appError");

const CreateChildUseCase = () => {
  const execute = async ({ name, age, guardian, contact }) => {
    const alreadyExists = await Child.findOne({ name, age, guardian });
    if (alreadyExists) throw appError("Criança já cadastrada");

    const place =
      age > 5 ? placesEnum.places.COMIN : placesEnum.places.COMIN_INFANTIL;

    const child = await Child.create({
      name,
      age,
      guardian,
      contact,
      place,
    });

    return child;
  };

  return {
    execute,
  };
};

module.exports = { CreateChildUseCase };
