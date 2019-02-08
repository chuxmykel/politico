/* eslint-disable class-methods-use-this */
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});


/** @class PartyController
 * @description Controller class for party routes
 * @exports partyController
 */
class PartyController {
  /**
     * @method addParty
     * @description Adds one party to the data structure
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     * @returns {object} JSON API Response.
     */
  addParty(req, res) {
    const queryText = 'INSERT INTO parties (name, hqAddress, logoUrl) VALUES ($1, $2, $3)';
    const { name, hqAddress, logoUrl } = req.body;

    if (!name) {
      return res.status(400).send({
        status: 400,
        error: 'Party name is required',
      });
    }
    if (!hqAddress) {
      return res.status(400).send({
        status: 400,
        error: 'Address is required',
      });
    }
    if (!logoUrl) {
      return res.status(400).send({
        status: 400,
        error: 'Please provide logo URL',
      });
    }
    const values = [name, hqAddress, logoUrl];
    pool.query(queryText, values, (error, results) => {
      res.status(201).json(results.rows);
    });
  }

  /**
     * @method getAllParties
     * @description Gets a list of all the parties
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     * @returns {object} JSON API Response.
     */
  getAllParties(req, res) {
    const queryText = 'SELECT * FROM parties ORDER BY id ASC';
    pool.query(queryText, (error, results) => {
      res.status(200).json(results.rows);
    });
  }

  /**
     * @method getOneParty
     * @description Gets a specific party from the list
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     * @returns {object} JSON API Response.
     */
  getOneParty(req, res) {
    const id = parseInt(req.params.id, 10);
    const queryText = 'SELECT * FROM parties WHERE id = $1';
    pool.query(queryText, [id], (error, result) => {
      res.status(200).json(result.rows);
    });
  }

  /**
     * @method editParty
     * @description Edit a specific party from the list
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     * @returns {object} JSON API Response.
     */
  editParty(req, res) {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;
    const queryText = 'UPDATE parties SET name = $1 WHERE id = $2';
    const values = [name, id];

    pool.query(queryText, values, (error, results) => {
      res.status(200).send(`User modified with ID: ${id}`);
    });
  }

  /**
     * @method deleteParty
     * @description Deletes a specific office from the list
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     * @returns {object} JSON API Response.
     */
  deleteParty(req, res) {
    const id = parseInt(req.params.id, 10);
    const text = 'DELETE FROM parties WHERE id = $1';
    pool.query(text, [id], (error, results) => {
      res.status(200).send(`User deleted with ID: ${id}`);
    });
  }
}

const partyController = new PartyController();

export default partyController;
