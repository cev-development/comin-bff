const handlingNotFound = (request, response, next) => {
  return response.status(404).json({
    message: `Route Not Found`,
  });
};

module.exports = { handlingNotFound };
