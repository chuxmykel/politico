"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parties = _interopRequireDefault(require("../model/parties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PartyController =
/*#__PURE__*/
function () {
  function PartyController() {
    _classCallCheck(this, PartyController);
  }

  _createClass(PartyController, [{
    key: "addParty",
    value: function addParty(req, res) {
      if (!req.body.name) {
        res.status(400).send({
          status: 400,
          error: 'Party name is required'
        });
      } else if (!req.body.hqAddress) {
        res.status(400).send({
          status: 400,
          error: 'HQ address is required'
        });
      } else if (!req.body.logoUrl) {
        res.status(400).send({
          status: 400,
          error: 'Logo Url is required'
        });
      } else {
        var party = {
          id: _parties.default.length + 1,
          name: req.body.name,
          hqAddress: req.body.hqAddress,
          logoUrl: req.body.logoUrl
        };

        _parties.default.push(party);

        res.status(201).send({
          status: 201,
          data: [{
            id: party.id,
            name: party.name
          }]
        });
      }
    }
  }, {
    key: "getAllParties",
    value: function getAllParties(req, res) {
      var dataArray = [];

      _parties.default.forEach(function (party) {
        var data = {
          id: party.id,
          name: party.name,
          logoUrl: party.logoUrl
        };
        dataArray.push(data);
      });

      res.status(200).send({
        status: 200,
        data: dataArray
      });
    }
  }, {
    key: "getOneParty",
    value: function getOneParty(req, res) {
      var id = parseInt(req.params.id, 10);

      _parties.default.forEach(function (party) {
        if (party.id === id) {
          res.status(200).send({
            status: 200,
            data: [{
              id: party.id,
              name: party.name,
              logoUrl: party.logoUrl
            }]
          });
        }
      });

      res.status(404).send({
        status: 404,
        error: 'Party does not exist'
      });
    }
  }, {
    key: "editParty",
    value: function editParty(req, res) {
      var id = parseInt(req.params.id, 10);
      var name = req.body.name;

      _parties.default.forEach(function (party) {
        if (party.id === id) {
          if (name) {
            res.status(200).send({
              status: 200,
              data: [{
                id: party.id,
                name: name
              }]
            });
          } else {
            res.status(400).send({
              status: 400,
              error: 'Party name is required'
            });
          }
        }
      });

      res.status(404).send({
        status: 404,
        error: 'Party does not exist'
      });
    }
  }, {
    key: "deleteParty",
    value: function deleteParty(req, res) {
      var id = parseInt(req.params.id, 10);

      _parties.default.forEach(function (party) {
        if (party.id === id) {
          delete _parties.default[id - 1];
          res.status(200).send({
            status: 200,
            data: [{
              message: "Party with id: ".concat(id, " deleted successfully")
            }]
          });
        }
      });

      res.status(404).send({
        status: 404,
        error: 'Party does not exist or has already been deleted'
      });
    }
  }]);

  return PartyController;
}();

var partyController = new PartyController();
var _default = partyController;
exports.default = _default;