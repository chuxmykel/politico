/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
import chai from 'chai';
import chaiHttp from 'chai-http';
import debug from 'debug';
import parties from '../app/model/parties';
import server from '../server';

const log = debug('app');
const should = chai.should();

chai.use(chaiHttp);

const versionedEndPoint = '/api/v1/parties';

describe(`POST/ ${versionedEndPoint}`, () => {
  it('Should add a party', (done) => {
    const party = {
      id: parties.length + 1,
      name: 'WAP',
      hqAddress: 'Lagos Nigeria',
      logoUrl: 'http://www.andelatest.com'
    };
    chai.request(server)
      .post(versionedEndPoint)
      .send(party)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.party.should.be.a('object');
        res.body.party.should.have.property('id');
        res.body.party.should.have.property('name');
        res.body.party.should.have.property('hqAddress');
        res.body.party.should.have.property('logoUrl');
        log(res.body);
        done();
      });
  });
});

describe(`GET/ ${versionedEndPoint}`, () => {
  it('Should get all parties', (done) => {
    chai.request(server)
      .get(versionedEndPoint)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.parties.forEach((party) => {
          party.should.be.a('object');
          party.id.should.be.a('number');
          party.name.should.be.a('string');
          party.hqAddress.should.be.a('string');
          party.logoUrl.should.be.a('string');
        });
        log(res.body);
        done();
      });
  });
});
