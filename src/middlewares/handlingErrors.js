const handlingErrors = (err, _request, response, next) => {
  if (err) {
    if (err.isAppError) {
      return response.status(err.status).json({
        message: err.message,
      });
    }

    console.log("[ERROR]", err);

    return response.status(500).json({
      message: `Internal server error: \n${err.message}`,
    });
  }

  next();
};

module.exports = { handlingErrors };
