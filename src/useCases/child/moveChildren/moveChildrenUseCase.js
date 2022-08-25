const Child = require("../../../models/Child");
const { isValidPlace } = require("../../../utils/validate");
const { appError } = require("../../../errors/appError");

const MoveChildrenUseCase = () => {
  const execute = async ({ place, childrenId }) => {
    if (!isValidPlace(place)) throw appError("Lugar Invalido");

    for (const childId of childrenId) {
      await Child.findByIdAndUpdate(childId, { place });
    }
  };

  return {
    execute,
  };
};

module.exports = { MoveChildrenUseCase };
