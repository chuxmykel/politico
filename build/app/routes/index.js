'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _partyController = require('../controllers/partyController');

var _partyController2 = _interopRequireDefault(_partyController);

var _officeController = require('../controllers/officeController');

var _officeController2 = _interopRequireDefault(_officeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var partyEndPoint = '/api/v1/parties/';
var officeEndPoint = '/api/v1/offices/';

// Party
router.post(partyEndPoint, _partyController2.default.addParty);
router.get(partyEndPoint, _partyController2.default.getAllParties);
router.get(partyEndPoint + ':id', _partyController2.default.getOneParty);
router.patch(partyEndPoint + ':id/name', _partyController2.default.editParty);
router.delete(partyEndPoint + ':id', _partyController2.default.deleteParty);

// Office
router.post(officeEndPoint, _officeController2.default.addOffice);
router.get(officeEndPoint, _officeController2.default.getAllOffices);
router.get(officeEndPoint + ':id', _officeController2.default.getOneOffice);

exports.default = router;
//# sourceMappingURL=index.js.map