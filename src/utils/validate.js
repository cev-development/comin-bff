const {
  places: { COMIN, RESTROOM, HOME },
} = require("../enums/placesEnum");

const isValidPlace = (place) => {
  return [COMIN, RESTROOM, HOME].includes(place);
};

module.exports = {
  isValidPlace,
};
