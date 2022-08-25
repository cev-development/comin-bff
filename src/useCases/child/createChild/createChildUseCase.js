const CreateChildUseCase = () => {
  const execute = ({ name, age, guardian, contact, place }) => {
    return {
      name,
      age,
      guardian,
      contact,
      place,
    };
  };

  return {
    execute,
  };
};

module.exports = { CreateChildUseCase };
