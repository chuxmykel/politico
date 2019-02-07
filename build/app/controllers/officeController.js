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
/** @class OfficeController
 * @description Controller class for office routes
 * @exports officeController
 */

var OfficeController =
/*#__PURE__*/
function () {
  function OfficeController() {
    _classCallCheck(this, OfficeController);
  }

  _createClass(OfficeController, [{
    key: "addOffice",

    /**
       * @method addOffice
       * @description Adds one office to the data structure
       * @param {object} req - The request object.
       * @param {object} res - The response object.
       * @returns {object} JSON API Response.
       */
    value: function addOffice(req, res) {
      var queryText = 'INSERT INTO offices (type, name) VALUES ($1, $2)';
      var _req$body = req.body,
          type = _req$body.type,
          name = _req$body.name;

      if (!type) {
        return res.status(400).send({
          status: 400,
          error: 'Define office type'
        });
      }

      if (!name) {
        return res.status(400).send({
          status: 400,
          error: 'Office name is required'
        });
      }

      var values = [type, name];
      pool.query(queryText, values, function (error, results) {
        return res.status(201).json({
          status: 201,
          data: results.rows
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

  }, {
    key: "getAllOffices",
    value: function getAllOffices(req, res) {
      var queryText = 'SELECT * FROM offices ORDER BY id ASC';
      pool.query(queryText, function (error, results) {
        return res.status(200).json({
          status: 200,
          data: results.rows
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

  }, {
    key: "getOneOffice",
    value: function getOneOffice(req, res) {
      var id = parseInt(req.params.id, 10);
      var queryText = 'SELECT * FROM offices WHERE id = $1';
      pool.query(queryText, [id], function (error, result) {
        return res.status(200).json({
          status: 200,
          data: result.rows
        });
      });
    }
  }]);

  return OfficeController;
}();

var officeController = new OfficeController();
var _default = officeController;
exports.default = _default;