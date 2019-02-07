"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _partyController = _interopRequireDefault(require("../controllers/partyController"));

var _officeController = _interopRequireDefault(require("../controllers/officeController"));

var _userController = _interopRequireDefault(require("../controllers/userController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

var homeEndPoint = '/';
var baseEndPoint = '/api/v1/';
var partyEndPoint = "".concat(baseEndPoint, "parties/");
var officeEndPoint = "".concat(baseEndPoint, "offices/");
var authEndPoint = "".concat(baseEndPoint, "auth/"); // Home

router.get(homeEndPoint, function (req, res) {
  res.status(200).redirect(baseEndPoint);
});
router.get(baseEndPoint, function (req, res) {
  res.status(200).send('Welcome to politico');
}); // Party

router.post(partyEndPoint, _partyController.default.addParty);
router.get(partyEndPoint, _partyController.default.getAllParties);
router.get("".concat(partyEndPoint, ":id"), _partyController.default.getOneParty);
router.patch("".concat(partyEndPoint, ":id/name"), _partyController.default.editParty);
router.delete("".concat(partyEndPoint, ":id"), _partyController.default.deleteParty); // Office

router.post(officeEndPoint, _officeController.default.addOffice);
router.get(officeEndPoint, _officeController.default.getAllOffices);
router.get("".concat(officeEndPoint, ":id"), _officeController.default.getOneOffice); // Users

router.post("".concat(authEndPoint, "signup"), _userController.default.registerUser);
var _default = router;
exports.default = _default;