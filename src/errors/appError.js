const appError = (message = "Bad Request", statusCode = 400) => {
  const error = new Error();

  error.isAppError = true;
  error.message = message;
  error.status = statusCode;

  return error;
};

module.exports = { appError };
