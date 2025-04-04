const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, 'iamnitin', { expiresIn: "1h" });
};

module.exports = generateToken;
