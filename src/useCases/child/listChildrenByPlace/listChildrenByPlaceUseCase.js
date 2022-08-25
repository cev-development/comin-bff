const Child = require("../../../models/Child");

const { appError } = require("../../../errors/appError");
const { isValidPlace } = require("../../../utils/validate");

const ListChildrenByPlaceUseCase = () => {
  const execute = async ({ place }) => {
    if (!isValidPlace(place)) throw appError("Lugar Invalido");

    return Child.find({ place });
  };

  return {
    execute,
  };
};

module.exports = { ListChildrenByPlaceUseCase };
