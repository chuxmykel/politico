/* eslint-disable require-jsdoc */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.SECRET_KEY;

class Auth {
  static hashPassword(password) {
    return bcrypt.hashSync(password, 10);
  }

  static generateToken(payload) {
    const token = jwt.sign(payload, secretKey, { expiresIn: '1 week' });
    return token;
  }
}

export default Auth;
