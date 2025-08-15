const {
  places: {
    BANHEIRO,
    BERCARIO_MISSIONARIO,
    CASA,
    DESBRAVADORES_MISSIONARIOS,
    GTEEN,
    PEQUENOS_MISSIONARIOS,
  },
} = require("../enums/placesEnum");

const isValidPlace = (place) => {
  return [
    BANHEIRO,
    BERCARIO_MISSIONARIO,
    CASA,
    DESBRAVADORES_MISSIONARIOS,
    GTEEN,
    PEQUENOS_MISSIONARIOS,
  ].includes(place);
};

module.exports = {
  isValidPlace,
};
