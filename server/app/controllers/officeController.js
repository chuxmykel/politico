/* eslint-disable class-methods-use-this */
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

/** @class OfficeController
 * @description Controller class for office routes
 * @exports officeController
 */
class OfficeController {
  /**
     * @method addOffice
     * @description Adds one office to the data structure
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     * @returns {object} JSON API Response.
     */
  addOffice(req, res) {
    const queryText = 'INSERT INTO offices (type, name) VALUES ($1, $2)';
    const { type, name } = req.body;

    if (!type) {
      return res.status(400).send({
        status: 400,
        error: 'Define office type',
      });
    }
    if (!name) {
      return res.status(400).send({
        status: 400,
        error: 'Office name is required',
      });
    }
    const values = [type, name];

    pool.query(queryText, values, (error, results) => {
      return res.status(201).json({
        status: 201,
        data: results.rows,
      });
    });
  }

  /**
     * @method getAllOffices
     * @description Gets a list of all the offices
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     * @returns {object} JSON API Response.
     */
  getAllOffices(req, res) {
    const queryText = 'SELECT * FROM offices ORDER BY id ASC';
    pool.query(queryText, (error, results) => {
      return res.status(200).json({
        status: 200,
        data: results.rows,
      });
    });
  }

  /**
     * @method getOneOffice
     * @description Gets a specific office from the list
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     * @returns {object} JSON API Response.
     */
  getOneOffice(req, res) {
    const id = parseInt(req.params.id, 10);
    const queryText = 'SELECT * FROM offices WHERE id = $1';
    pool.query(queryText, [id], (error, result) => {
      return res.status(200).json({
        status: 200,
        data: result.rows,
      });
    });
  }
}

const officeController = new OfficeController();

export default officeController;
