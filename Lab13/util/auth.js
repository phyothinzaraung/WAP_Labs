const jwt = require('jsonwebtoken');
const { jwtSecret, expiresIn } = require('./config');

function generateToken(payload) {
  return jwt.sign(payload, jwtSecret, { expiresIn });
}

function verifyToken(token) {
  return jwt.verify(token, jwtSecret);
}

module.exports = {
  generateToken,
  verifyToken
};
