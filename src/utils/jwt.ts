const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');

dotEnv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const jwtUtil = {
    sign: (payload: { id: string; email: string }) =>
        jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' }),
    verify: (token: string) => jwt.verify(token, JWT_SECRET),
};

module.exports = {
    jwtUtil,
};
