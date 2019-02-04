'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _parties = require('../app/model/parties');

var _parties2 = _interopRequireDefault(_parties);

var _offices = require('../app/model/offices');

var _offices2 = _interopRequireDefault(_offices);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.should(); /* eslint-disable no-undef */


_chai2.default.use(_chaiHttp2.default);

var partyEndPoint = '/api/v1/parties/';
var officeEndPoint = '/api/v1/offices/';

describe('Party Tests', function () {
  describe('POST ' + partyEndPoint, function () {
    it('Should add a party', function (done) {
      var party = {
        id: _parties2.default.length + 1,
        name: 'WAP',
        hqAddress: 'Lagos Nigeria',
        logoUrl: 'http://www.andelatest.com'
      };
      _chai2.default.request(_server2.default).post(partyEndPoint).send(party).end(function (err, res) {
        res.should.have.status(201);
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('name');
        done();
      });
    });
  });

  describe('GET ' + partyEndPoint, function () {
    it('Should get all parties', function (done) {
      _chai2.default.request(_server2.default).get(partyEndPoint).end(function (err, res) {
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
  describe('GET ' + partyEndPoint + 'id', function () {
    it('Should get a specific party', function (done) {
      var id = 3;
      _chai2.default.request(_server2.default).get('' + partyEndPoint + id).end(function (err, res) {
        res.should.have.status(200);
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('name');
        res.body.data[0].should.have.property('logoUrl');
        done();
      });
    });
  });
  describe('PATCH ' + partyEndPoint + 'id/name', function () {
    it('Should edit a party', function (done) {
      var input = {
        name: 'andela'
      };
      var id = 1;
      _chai2.default.request(_server2.default).patch('' + partyEndPoint + id + '/name').send(input).end(function (err, res) {
        res.should.have.status(200);
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('name');
        done();
      });
    });
  });
  describe('DELETE ' + partyEndPoint + 'id', function () {
    it('Should delete a party', function (done) {
      var id = 5;
      _chai2.default.request(_server2.default).delete('' + partyEndPoint + id).end(function (err, res) {
        res.should.have.status(200);
        done();
      });
    });
  });
});

describe('Office Tests', function () {
  describe('POST ' + officeEndPoint, function () {
    it('Should add an office', function (done) {
      var office = {
        id: _offices2.default.length + 1,
        type: 'Students Union Government',
        name: 'Presidential'
      };
      _chai2.default.request(_server2.default).post(officeEndPoint).send(office).end(function (err, res) {
        res.should.have.status(201);
        res.body.office.should.be.a('object');
        res.body.office.should.have.property('id');
        res.body.office.should.have.property('type');
        res.body.office.should.have.property('name');
        done();
      });
    });
  });
  describe('GET ' + officeEndPoint, function () {
    it('Should get all offices', function (done) {
      _chai2.default.request(_server2.default).get(officeEndPoint).end(function (err, res) {
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
  describe('GET ' + officeEndPoint + 'id', function () {
    it('Should get a specific office', function (done) {
      var id = 3;
      _chai2.default.request(_server2.default).get('' + officeEndPoint + id).end(function (err, res) {
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
//# sourceMappingURL=test.js.map