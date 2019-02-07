"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_dotenv.default.config();

var pool = new _pg.Pool({
  connectionString: process.env.DATABASE_URL
});
/** @class PartyController
 * @description Controller class for party routes
 * @exports partyController
 */

var PartyController =
/*#__PURE__*/
function () {
  function PartyController() {
    _classCallCheck(this, PartyController);
  }

  _createClass(PartyController, [{
    key: "addParty",

    /**
       * @method addParty
       * @description Adds one party to the data structure
       * @param {object} req - The request object.
       * @param {object} res - The response object.
       * @returns {object} JSON API Response.
       */
    value: function addParty(req, res) {
      var queryText = 'INSERT INTO parties (name, hqAddress, logoUrl) VALUES ($1, $2, $3)';
      var _req$body = req.body,
          name = _req$body.name,
          hqAddress = _req$body.hqAddress,
          logoUrl = _req$body.logoUrl;

      if (!name) {
        return res.status(400).send({
          status: 400,
          error: 'Party name is required'
        });
      }

      if (!hqAddress) {
        return res.status(400).send({
          status: 400,
          error: 'Address is required'
        });
      }

      if (!logoUrl) {
        return res.status(400).send({
          status: 400,
          error: 'Please provide logo URL'
        });
      }

      var values = [name, hqAddress, logoUrl];
      pool.query(queryText, values, function (error, results) {
        res.status(201).json(results.row);
      });
    }
    /**
       * @method getAllParties
       * @description Gets a list of all the parties
       * @param {object} req - The request object.
       * @param {object} res - The response object.
       * @returns {object} JSON API Response.
       */

  }, {
    key: "getAllParties",
    value: function getAllParties(req, res) {
      var queryText = 'SELECT * FROM parties ORDER BY id ASC';
      pool.query(queryText, function (error, results) {
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

  }, {
    key: "getOneParty",
    value: function getOneParty(req, res) {
      var id = parseInt(req.params.id, 10);
      var queryText = 'SELECT * FROM parties WHERE id = $1';
      pool.query(queryText, [id], function (error, result) {
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

  }, {
    key: "editParty",
    value: function editParty(req, res) {
      var id = parseInt(req.params.id, 10);
      var name = req.body.name;
      var queryText = 'UPDATE parties SET name = $1 WHERE id = $2';
      var values = [name, id];
      pool.query(queryText, values, function (error, results) {
        res.status(200).send("User modified with ID: ".concat(id));
      });
    }
    /**
       * @method deleteParty
       * @description Deletes a specific office from the list
       * @param {object} req - The request object.
       * @param {object} res - The response object.
       * @returns {object} JSON API Response.
       */

  }, {
    key: "deleteParty",
    value: function deleteParty(req, res) {
      var id = parseInt(req.params.id, 10);
      var text = 'DELETE FROM parties WHERE id = $1';
      pool.query(text, [id], function (error, results) {
        res.status(200).send("User deleted with ID: ".concat(id));
      });
    }
  }]);

  return PartyController;
}();

var partyController = new PartyController();
var _default = partyController;
exports.default = _default;