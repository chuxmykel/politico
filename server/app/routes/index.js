import express from 'express';
import PartyController from '../controllers/partyController';
import OfficeController from '../controllers/officeController';

const router = express.Router();
const baseEndpoint = '/api/v1/';
const partyEndPoint = '/api/v1/parties/';
const officeEndPoint = '/api/v1/offices/';


// Home
router.get(baseEndpoint, (req, res) => {
  res.send('Welcome to politico');
});

// Party
router.post(partyEndPoint, PartyController.addParty);
router.get(partyEndPoint, PartyController.getAllParties);
router.get(`${partyEndPoint}:id`, PartyController.getOneParty);
router.patch(`${partyEndPoint}:id/name`, PartyController.editParty);
router.delete(`${partyEndPoint}:id`, PartyController.deleteParty);

// Office
router.post(officeEndPoint, OfficeController.addOffice);
router.get(officeEndPoint, OfficeController.getAllOffices);
router.get(`${officeEndPoint}:id`, OfficeController.getOneOffice);

export default router;
