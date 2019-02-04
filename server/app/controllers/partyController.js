/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import parties from '../model/parties';

class PartyController {
  addParty(req, res) {
    if (!req.body.name) {
      res.status(400).send({
        status: 400,
        error: 'Party name is required',
      });
    } else if (!req.body.hqAddress) {
      res.status(400).send({
        status: 400,
        error: 'HQ address is required',
      });
    } else if (!req.body.logoUrl) {
      res.status(400).send({
        status: 400,
        error: 'Logo Url is required',
      });
    } else {
      const party = {
        id: parties.length + 1,
        name: req.body.name,
        hqAddress: req.body.hqAddress,
        logoUrl: req.body.logoUrl,
      };
      parties.push(party);

      res.status(201).send({
        status: 201,
        data: [{
          id: party.id,
          name: party.name,
        }],
      });
    }
  }

  getAllParties(req, res) {
    const dataArray = [];
    parties.forEach((party) => {
      const data = {
        id: party.id,
        name: party.name,
        logoUrl: party.logoUrl,
      };
      dataArray.push(data);
    });

    res.status(200).send({
      status: 200,
      data: dataArray,
    });
  }

  getOneParty(req, res) {
    const id = parseInt(req.params.id, 10);
    parties.forEach((party) => {
      if (party.id === id) {
        res.status(200).send({
          status: 200,
          data: [{
            id: party.id,
            name: party.name,
            logoUrl: party.logoUrl,
          }],
        });
      }
    });
    res.status(404).send({
      status: 404,
      error: 'Party does not exist',
    });
  }

  editParty(req, res) {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;

    parties.forEach((party) => {
      if (party.id === id) {
        if (name) {
          res.status(200).send({
            status: 200,
            data: [{
              id: party.id,
              name,
            }],
          });
        } else {
          res.status(400).send({
            status: 400,
            error: 'Party name is required',
          });
        }
      }
    });

    res.status(404).send({
      status: 404,
      error: 'Party does not exist',
    });
  }

  deleteParty(req, res) {
    const id = parseInt(req.params.id, 10);
    parties.forEach((party) => {
      if (party.id === id) {
        delete parties[id - 1];
        res.status(200).send({
          status: 200,
          data: [{
            message: `Party with id: ${id} deleted successfully`,
          }],
        });
      }
    });
    res.status(404).send({
      status: 404,
      error: 'Party does not exist or has already been deleted',
    });
  }
}

const partyController = new PartyController();

export default partyController;
