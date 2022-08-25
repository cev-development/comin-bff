const Child = require("../../../models/Child");
const { places } = require("../../../enums/placesEnum");

const MoveAllChildrenHomeUseCase = () => {
  const execute = async () => {
    const children = await Child.find();

    for (const child of children) {
      await Child.findByIdAndUpdate(child._id, { place: places.HOME });
    }
  };

  return {
    execute,
  };
};

module.exports = { MoveAllChildrenHomeUseCase };
