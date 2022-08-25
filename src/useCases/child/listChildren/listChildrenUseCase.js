const Child = require("../../../models/Child");

const ListChildrenUseCase = () => {
  const execute = async ({ name }) => {
    if (!name) return Child.find();

    return Child.find({
      $or: [
        { name: { $regex: ".*" + name + ".*", $options: "i" } },
        { guardian: { $regex: ".*" + name + ".*", $options: "i" } },
      ],
    });
  };

  return {
    execute,
  };
};

module.exports = { ListChildrenUseCase };
