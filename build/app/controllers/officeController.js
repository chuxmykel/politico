'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _offices = require('../model/offices');

var _offices2 = _interopRequireDefault(_offices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OfficeController = function () {
  function OfficeController() {
    _classCallCheck(this, OfficeController);
  }

  _createClass(OfficeController, [{
    key: 'addOffice',
    value: function addOffice(req, res) {
      if (!req.body.type) {
        res.status(400).send({
          status: 400,
          error: 'Define office type'
        });
      } else if (!req.body.name) {
        res.status(400).send({
          status: 400,
          error: 'Office name is required'
        });
      } else {
        var office = {
          id: _offices2.default.length + 1,
          type: req.body.type,
          name: req.body.name
        };
        _offices2.default.push(office);

        res.status(201).send({
          status: 201,
          office: office
        });
      }
    }
  }, {
    key: 'getAllOffices',
    value: function getAllOffices(req, res) {
      res.status(200).send({
        status: 200,
        offices: _offices2.default
      });
    }
  }, {
    key: 'getOneOffice',
    value: function getOneOffice(req, res) {
      var id = parseInt(req.params.id, 10);
      _offices2.default.forEach(function (office) {
        if (office.id === id) {
          res.status(200).send({
            status: 200,
            office: office
          });
        }
      });
      res.status(404).send({
        status: 404,
        error: 'Resource not found'
      });
    }
  }]);

  return OfficeController;
}();

var officeController = new OfficeController();

exports.default = officeController;
//# sourceMappingURL=officeController.js.map