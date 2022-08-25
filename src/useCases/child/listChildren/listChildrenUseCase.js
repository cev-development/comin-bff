const Child = require("../../../models/Child");

const ListChildrenUseCase = () => {
  const execute = async ({ name, guardian }) => {
    if (!name && !guardian) return Child.find();

    return Child.find(resolveFindParams({ name, guardian }));
  };

  const resolveFindParams = ({ name, guardian }) => {
    if (name && !guardian)
      return { name: { $regex: ".*" + name + ".*", $options: "i" } };

    if (!name && guardian)
      return { guardian: { $regex: ".*" + guardian + ".*", $options: "i" } };

    return {
      $and: [
        { name: { $regex: ".*" + name + ".*", $options: "i" } },
        { guardian: { $regex: ".*" + guardian + ".*", $options: "i" } },
      ],
    };
  };

  return {
    execute,
  };
};

module.exports = { ListChildrenUseCase };
