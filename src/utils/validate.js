const {
  places: { COMIN, COMIN_INFANTIL, RESTROOM, HOME },
} = require("../enums/placesEnum");

const isValidPlace = (place) => {
  return [COMIN, COMIN_INFANTIL, RESTROOM, HOME].includes(place);
};

module.exports = {
  isValidPlace,
};
