const Child = require("../../../models/Child");
const placesEnum = require("../../../enums/placesEnum");
const { appError } = require("../../../errors/appError");

const CreateChildUseCase = () => {
  const execute = async ({
    name,
    age,
    guardian,
    contact,
    pcd,
    sensitivity,
    literacy,
    learningDisorder,
    escort,
  }) => {
    const alreadyExists = await Child.findOne({ name, age, guardian });
    if (alreadyExists) throw appError("Criança já cadastrada");

    const place =
      age > 12
        ? placesEnum.places.GTEEN
        : age > 7
        ? placesEnum.places.DESBRAVADORES_MISSIONARIOS
        : age > 4
        ? placesEnum.places.PEQUENOS_MISSIONARIOS
        : placesEnum.places.BERCARIO_MISSIONARIO;

    const child = await Child.create({
      name,
      age,
      guardian,
      contact,
      place,
      pcd,
      sensitivity,
      literacy,
      learningDisorder,
      escort,
    });

    return child;
  };

  return {
    execute,
  };
};

module.exports = { CreateChildUseCase };
