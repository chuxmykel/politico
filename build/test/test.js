"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _server = _interopRequireDefault(require("../server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.should();

_chai.default.use(_chaiHttp.default);

var baseEndPoint = '/';
var homeEndPoint = '/api/v1/';
var partyEndPoint = '/api/v1/parties/';
var officeEndPoint = '/api/v1/offices/';
describe('Party Tests', function () {
  describe("POST ".concat(partyEndPoint), function () {
    it('Should return 200 on successfully adding a party', function (done) {
      _chai.default.request(_server.default).post(partyEndPoint).send({
        name: 'WAP',
        hqAddress: 'Lagos Nigeria',
        logoUrl: 'http://www.andelatest.com'
      }).end(function (err, res) {
        res.should.have.status(201);
        done();
      });
    });
    it('Should return 400 for a post request without a party name', function (done) {
      _chai.default.request(_server.default).post(partyEndPoint).send({
        hqAddress: 'Kaduna',
        logoUrl: 'http://www.atest.com'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('Should return 400 for a post request without an address', function (done) {
      _chai.default.request(_server.default).post(partyEndPoint).send({
        name: 'SMT',
        logoUrl: 'http://www.atest.com'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('Should return 400 for a post request without a logoUrl', function (done) {
      _chai.default.request(_server.default).post(partyEndPoint).send({
        name: 'STF',
        hqAddress: 'Epic tower'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
  });
  describe("GET ".concat(partyEndPoint), function () {
    it('Should get all parties', function (done) {
      _chai.default.request(_server.default).get(partyEndPoint).end(function (err, res) {
        res.should.have.status(200);
        done();
      });
    });
  });
  describe("GET ".concat(partyEndPoint, "id"), function () {
    it('Should get a specific party', function (done) {
      var id = 3;

      _chai.default.request(_server.default).get("".concat(partyEndPoint).concat(id)).end(function (err, res) {
        res.should.have.status(200);
        done();
      });
    });
  });
  describe("PATCH ".concat(partyEndPoint, "id/name"), function () {
    it('Should edit a party', function (done) {
      var input = {
        name: 'andela'
      };
      var id = 1;

      _chai.default.request(_server.default).patch("".concat(partyEndPoint).concat(id, "/name")).send(input).end(function (err, res) {
        res.should.have.status(200);
        done();
      });
    });
  });
  describe("DELETE ".concat(partyEndPoint, "id"), function () {
    it('Should delete a party', function (done) {
      var id = 5;

      _chai.default.request(_server.default).delete("".concat(partyEndPoint).concat(id)).end(function (err, res) {
        res.should.have.status(200);
        done();
      });
    });
  });
});
describe('Office Tests', function () {
  describe("POST ".concat(officeEndPoint), function () {
    it('Should add an office', function (done) {
      var office = {
        type: 'Students Union Government',
        name: 'Presidential'
      };

      _chai.default.request(_server.default).post(officeEndPoint).send(office).end(function (err, res) {
        res.should.have.status(201);
        done();
      });
    });
    it('Should return 400 for a post request without a type', function (done) {
      _chai.default.request(_server.default).post(officeEndPoint).send({
        name: 'secretarial'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
    it('Should return 400 for a post request without a name', function (done) {
      _chai.default.request(_server.default).post(officeEndPoint).send({
        type: 'secretarial'
      }).end(function (err, res) {
        res.should.have.status(400);
        done();
      });
    });
  });
  describe("GET ".concat(officeEndPoint), function () {
    it('Should get all offices', function (done) {
      _chai.default.request(_server.default).get(officeEndPoint).end(function (err, res) {
        res.should.have.status(200);
        done();
      });
    });
  });
  describe("GET ".concat(officeEndPoint, "id"), function () {
    it('Should get a specific office', function (done) {
      var id = 3;

      _chai.default.request(_server.default).get("".concat(officeEndPoint).concat(id)).end(function (err, res) {
        res.should.have.status(200);
        done();
      });
    });
  });
});
describe('Home Routes Tests', function () {
  describe("GET ".concat(homeEndPoint), function () {
    it('Should be successful', function (done) {
      _chai.default.request(_server.default).get(homeEndPoint).end(function (err, res) {
        res.should.have.status(200);
        done();
      });
    });
  });
  describe("GET ".concat(baseEndPoint), function () {
    it('Should be successful', function (done) {
      _chai.default.request(_server.default).get(baseEndPoint).end(function (err, res) {
        res.should.have.status(200);
        done();
      });
    });
  });
});