/* eslint-disable no-shadow */
/* eslint-disable require-jsdoc */
/* eslint-disable class-methods-use-this */
import { Pool } from 'pg';
import dotenv from 'dotenv';
import Auth from '../auth/auth';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

class UserController {
  registerUser(req, res) {
    const queryText = `INSERT INTO users (firstname, lastname, othername, email, phoneNumber, 
        password) VALUES ($1, $2, $3, $4, $5, $6)`;
    const {
      firstname, lastname, othername, email, phoneNumber, password
    } = req.body;

    const hashedPassword = Auth.hashPassword(password);

    const values = [firstname, lastname, othername, email,
      phoneNumber, hashedPassword];

    pool.query(queryText, values, (error, results) => {
      if (error) {
        throw error;
      }

      const { id, email, isAdmin, } = results.rows;

      const token = Auth.generateToken({ id, email, isAdmin });

      return res.status(201).json({
        status: 201,
        data: [{
          message: 'Registration Successful!',
          token,
        }],
      });
    });
  }
}

const userController = new UserController();

export default userController;
