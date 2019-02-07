import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

chai.should();

chai.use(chaiHttp);

const baseEndPoint = '/';
const homeEndPoint = '/api/v1/';
const partyEndPoint = '/api/v1/parties/';
const officeEndPoint = '/api/v1/offices/';

describe('Party Tests', () => {
  describe(`POST ${partyEndPoint}`, () => {
    it('Should return 200 on successfully adding a party', (done) => {
      chai.request(server)
        .post(partyEndPoint)
        .send({
          name: 'WAP',
          hqAddress: 'Lagos Nigeria',
          logoUrl: 'http://www.andelatest.com',
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
    it('Should return 400 for a post request without a party name', (done) => {
      chai.request(server)
        .post(partyEndPoint)
        .send({
          hqAddress: 'Kaduna',
          logoUrl: 'http://www.atest.com',
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('Should return 400 for a post request without an address', (done) => {
      chai.request(server)
        .post(partyEndPoint)
        .send({
          name: 'SMT',
          logoUrl: 'http://www.atest.com',
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('Should return 400 for a post request without a logoUrl', (done) => {
      chai.request(server)
        .post(partyEndPoint)
        .send({
          name: 'STF',
          hqAddress: 'Epic tower',
        })
        .end((err, res) => {
          res.should.have.status(400);
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
        type: 'Students Union Government',
        name: 'Presidential',
      };
      chai.request(server)
        .post(officeEndPoint)
        .send(office)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
    it('Should return 400 for a post request without a type', (done) => {
      chai.request(server)
        .post(officeEndPoint)
        .send({
          name: 'secretarial',
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('Should return 400 for a post request without a name', (done) => {
      chai.request(server)
        .post(officeEndPoint)
        .send({
          type: 'secretarial',
        })
        .end((err, res) => {
          res.should.have.status(400);
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
          done();
        });
    });
  });
});

describe('Home Routes Tests', () => {
  describe(`GET ${homeEndPoint}`, () => {
    it('Should be successful', (done) => {
      chai.request(server)
        .get(homeEndPoint)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe(`GET ${baseEndPoint}`, () => {
    it('Should be successful', (done) => {
      chai.request(server)
        .get(baseEndPoint)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
