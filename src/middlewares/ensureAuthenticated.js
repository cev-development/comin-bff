const { verify } = require("jsonwebtoken");

const { auth } = require("../config");
const { appError } = require("../errors/appError");

const ensureAuthenticated = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw appError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, auth.secretToken);

    request.user = {
      id: parseInt(user_id, 10),
    };
  } catch {
    throw appError("Invalid token!", 401);
  }

  next();
};

module.exports = { ensureAuthenticated };
