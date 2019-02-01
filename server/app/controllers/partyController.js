/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable comma-dangle */
/* eslint-disable class-methods-use-this */
import parties from '../model/parties';

class PartyController {
  addParty(req, res) {
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
      const party = {
        id: parties.length + 1,
        name: req.body.name,
        hqAddress: req.body.hqAddress,
        logoUrl: req.body.logoUrl
      };
      parties.push(party);

      res.status(201).send({
        status: 201,
        party
      });
    }
  }

  getAllParties(req, res) {
    res.status(200).send({
      status: 200,
      parties
    });
  }

  getOneParty(req, res) {
    const id = parseInt(req.params.id);
    parties.forEach((party) => {
      if (party.id === id) {
        res.status(200).send({
          status: 200,
          party
        });
      }
    });
    res.status(404).send({
      status: 404,
      error: 'Resource not found'
    });
  }

  editParty(req, res) {
    const id = parseInt(req.params.id);
    const { name, hqAddress, logoUrl } = req.body;

    parties.forEach((party) => {
      if (party.id === id) {
        if (name) {
          party.name = name;
        }
        if (hqAddress) {
          party.hqAddress = hqAddress;
        }
        if (logoUrl) {
          party.logoUrl = logoUrl;
        }
        res.status(200).send({
          status: 200,
          party
        });
      }
    });

    res.status(404).send({
      status: 404,
      error: 'Party does not exist'
    });
  }

  deleteParty(req, res) {
    const id = parseInt(req.params.id);
    parties.forEach((party) => {
      if (party.id === id) {
        delete parties[id - 1];
        res.status(200).send({
          status: 200,
          parties
        });
      }
    });
    res.status(404).send({
      status: 404,
      error: 'Resource not found'
    });
  }
}

const partyController = new PartyController();

export default partyController;
