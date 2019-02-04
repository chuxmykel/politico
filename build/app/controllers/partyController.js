'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */


var _parties = require('../model/parties');

var _parties2 = _interopRequireDefault(_parties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PartyController = function () {
  function PartyController() {
    _classCallCheck(this, PartyController);
  }

  _createClass(PartyController, [{
    key: 'addParty',
    value: function addParty(req, res) {
      if (!req.body.name) {
        return res.status(400).send({
          status: 400,
          error: 'Party name is required'
        });
      }
      if (!req.body.hqAddress) {
        return res.status(400).send({
          status: 400,
          error: 'HQ address is required'
        });
      }
      if (!req.body.logoUrl) {
        return res.status(400).send({
          status: 400,
          error: 'Logo Url is required'
        });
      }
      var party = {
        id: _parties2.default.length + 1,
        name: req.body.name,
        hqAddress: req.body.hqAddress,
        logoUrl: req.body.logoUrl
      };
      _parties2.default.push(party);

      return res.status(201).send({
        status: 201,
        data: [{
          id: party.id,
          name: party.name
        }]
      });
    }
  }, {
    key: 'getAllParties',
    value: function getAllParties(req, res) {
      var dataArray = [];
      _parties2.default.forEach(function (party) {
        var data = {
          id: party.id,
          name: party.name,
          logoUrl: party.logoUrl
        };
        dataArray.push(data);
      });

      return res.status(200).send({
        status: 200,
        data: dataArray
      });
    }
  }, {
    key: 'getOneParty',
    value: function getOneParty(req, res) {
      var id = parseInt(req.params.id, 10);
      _parties2.default.forEach(function (party) {
        if (party.id === id) {
          return res.status(200).send({
            status: 200,
            data: [{
              id: party.id,
              name: party.name,
              logoUrl: party.logoUrl
            }]
          });
        }
      });
      return res.status(404).send({
        status: 404,
        error: 'Party does not exist'
      });
    }
  }, {
    key: 'editParty',
    value: function editParty(req, res) {
      var id = parseInt(req.params.id, 10);
      var name = req.body.name;


      _parties2.default.forEach(function (party) {
        if (party.id === id) {
          if (name) {
            return res.status(200).send({
              status: 200,
              data: [{
                id: party.id,
                name: name
              }]
            });
          }
          return res.status(400).send({
            status: 400,
            error: 'Party name is required'
          });
        }
      });

      return res.status(404).send({
        status: 404,
        error: 'Party does not exist'
      });
    }
  }, {
    key: 'deleteParty',
    value: function deleteParty(req, res) {
      var id = parseInt(req.params.id, 10);
      _parties2.default.forEach(function (party) {
        if (party.id === id) {
          delete _parties2.default[id - 1];
          return res.status(200).send({
            status: 200,
            data: [{
              message: 'Party with id: ' + id + ' deleted successfully'
            }]
          });
        }
      });
      return res.status(404).send({
        status: 404,
        error: 'Party does not exist or has already been deleted'
      });
    }
  }]);

  return PartyController;
}();

var partyController = new PartyController();

exports.default = partyController;
//# sourceMappingURL=partyController.js.map