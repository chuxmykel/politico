"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _parties = _interopRequireDefault(require("../app/model/parties"));

var _offices = _interopRequireDefault(require("../app/model/offices"));

var _server = _interopRequireDefault(require("../server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
_chai.default.should();

_chai.default.use(_chaiHttp.default);

var partyEndPoint = '/api/v1/parties/';
var officeEndPoint = '/api/v1/offices/';
describe('Party Tests', function () {
  describe("POST ".concat(partyEndPoint), function () {
    it('Should add a party', function (done) {
      var party = {
        id: _parties.default.length + 1,
        name: 'WAP',
        hqAddress: 'Lagos Nigeria',
        logoUrl: 'http://www.andelatest.com'
      };

      _chai.default.request(_server.default).post(partyEndPoint).send(party).end(function (err, res) {
        res.should.have.status(201);
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('name');
        done();
      });
    });
  });
  describe("GET ".concat(partyEndPoint), function () {
    it('Should get all parties', function (done) {
      _chai.default.request(_server.default).get(partyEndPoint).end(function (err, res) {
        res.should.have.status(200);
        res.body.data.forEach(function (item) {
          item.should.be.a('object');
          item.id.should.be.a('number');
          item.name.should.be.a('string');
          item.logoUrl.should.be.a('string');
        });
        done();
      });
    });
  });
  describe("GET ".concat(partyEndPoint, "id"), function () {
    it('Should get a specific party', function (done) {
      var id = 3;

      _chai.default.request(_server.default).get("".concat(partyEndPoint).concat(id)).end(function (err, res) {
        res.should.have.status(200);
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('name');
        res.body.data[0].should.have.property('logoUrl');
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
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('name');
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
        id: _offices.default.length + 1,
        type: 'Students Union Government',
        name: 'Presidential'
      };

      _chai.default.request(_server.default).post(officeEndPoint).send(office).end(function (err, res) {
        res.should.have.status(201);
        res.body.office.should.be.a('object');
        res.body.office.should.have.property('id');
        res.body.office.should.have.property('type');
        res.body.office.should.have.property('name');
        done();
      });
    });
  });
  describe("GET ".concat(officeEndPoint), function () {
    it('Should get all offices', function (done) {
      _chai.default.request(_server.default).get(officeEndPoint).end(function (err, res) {
        res.should.have.status(200);
        res.body.offices.forEach(function (office) {
          office.should.be.a('object');
          office.id.should.be.a('number');
          office.type.should.be.a('string');
        });
        done();
      });
    });
  });
  describe("GET ".concat(officeEndPoint, "id"), function () {
    it('Should get a specific office', function (done) {
      var id = 3;

      _chai.default.request(_server.default).get("".concat(officeEndPoint).concat(id)).end(function (err, res) {
        res.should.have.status(200);
        res.body.office.should.be.a('object');
        res.body.office.should.have.property('id');
        res.body.office.should.have.property('type');
        res.body.office.should.have.property('name');
        done();
      });
    });
  });
});