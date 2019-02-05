import chai from 'chai';
import chaiHttp from 'chai-http';
import parties from '../app/model/parties';
import offices from '../app/model/offices';
import server from '../server';

chai.should();

chai.use(chaiHttp);

const partyEndPoint = '/api/v1/parties/';
const officeEndPoint = '/api/v1/offices/';

describe('Party Tests', () => {
  describe(`POST ${partyEndPoint}`, () => {
    it('Should add a party', (done) => {
      const party = {
        id: parties.length + 1,
        name: 'WAP',
        hqAddress: 'Lagos Nigeria',
        logoUrl: 'http://www.andelatest.com',
      };
      chai.request(server)
        .post(partyEndPoint)
        .send(party)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.data.should.be.a('array');
          res.body.data[0].should.have.property('id');
          res.body.data[0].should.have.property('name');
          done();
        });
    });
  });

  describe(`GET ${partyEndPoint}`, () => {
    it('Should get all parties', (done) => {
      chai.request(server)
        .get(partyEndPoint)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.forEach((item) => {
            item.should.be.a('object');
            item.id.should.be.a('number');
            item.name.should.be.a('string');
            item.logoUrl.should.be.a('string');
          });
          done();
        });
    });
  });
  describe(`GET ${partyEndPoint}id`, () => {
    it('Should get a specific party', (done) => {
      const id = 3;
      chai.request(server)
        .get(`${partyEndPoint}${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a('array');
          res.body.data[0].should.have.property('id');
          res.body.data[0].should.have.property('name');
          res.body.data[0].should.have.property('logoUrl');
          done();
        });
    });
  });
  describe(`PATCH ${partyEndPoint}id/name`, () => {
    it('Should edit a party', (done) => {
      const input = {
        name: 'andela',
      };
      const id = 1;
      chai.request(server)
        .patch(`${partyEndPoint}${id}/name`)
        .send(input)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a('array');
          res.body.data[0].should.have.property('id');
          res.body.data[0].should.have.property('name');
          done();
        });
    });
  });
  describe(`DELETE ${partyEndPoint}id`, () => {
    it('Should delete a party', (done) => {
      const id = 5;
      chai.request(server)
        .delete(`${partyEndPoint}${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});

describe('Office Tests', () => {
  describe(`POST ${officeEndPoint}`, () => {
    it('Should add an office', (done) => {
      const office = {
        id: offices.length + 1,
        type: 'Students Union Government',
        name: 'Presidential',
      };
      chai.request(server)
        .post(officeEndPoint)
        .send(office)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.office.should.be.a('object');
          res.body.office.should.have.property('id');
          res.body.office.should.have.property('type');
          res.body.office.should.have.property('name');
          done();
        });
    });
  });
  describe(`GET ${officeEndPoint}`, () => {
    it('Should get all offices', (done) => {
      chai.request(server)
        .get(officeEndPoint)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.offices.forEach((office) => {
            office.should.be.a('object');
            office.id.should.be.a('number');
            office.type.should.be.a('string');
          });
          done();
        });
    });
  });
  describe(`GET ${officeEndPoint}id`, () => {
    it('Should get a specific office', (done) => {
      const id = 3;
      chai.request(server)
        .get(`${officeEndPoint}${id}`)
        .end((err, res) => {
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
