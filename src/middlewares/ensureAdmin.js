const { auth } = require("../config");
const { appError } = require("../errors/appError");

const ensureAdmin = (request, response, next) => {
  const { client_id } = request.headers;

  if (!client_id || !auth.admin.clientIds.includes(client_id)) {
    throw appError("Precondition Failed", 412);
  }

  next();
};

module.exports = { ensureAdmin };
