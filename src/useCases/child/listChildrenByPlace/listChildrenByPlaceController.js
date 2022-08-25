const { ListChildrenByPlaceUseCase } = require("./listChildrenByPlaceUseCase");

const listChildrenByPlaceUseCase = ListChildrenByPlaceUseCase();

const ListChildrenByPlaceController = () => {
  const handle = async (request, response) => {
    const { place } = request.params;

    const children = await listChildrenByPlaceUseCase.execute({ place });

    response.json(children);
  };

  return {
    handle,
  };
};

module.exports = { ListChildrenByPlaceController };
