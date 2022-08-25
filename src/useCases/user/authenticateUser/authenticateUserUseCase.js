const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const { auth } = require("../../../config");
const User = require("../../../models/User");

const { appError } = require("../../../errors/appError");

const AuthenticateUserUseCase = () => {
  const execute = async ({ username, password }) => {
    const user = await User.findOne({ username });
    if (!user) throw appError("usuario ou senha invalido");

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) throw appError("usuario ou senha invalido");

    const { secretToken, expiresIn } = auth;
    const token = sign({}, secretToken, {
      subject: `${user._id}`,
      expiresIn: expiresIn,
    });

    return {
      token,
      user: {
        name: user.name,
        username: user.username,
      },
    };
  };

  return {
    execute,
  };
};

module.exports = { AuthenticateUserUseCase };
