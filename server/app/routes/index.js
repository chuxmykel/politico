import express from 'express';
import PartyController from '../controllers/partyController';
import OfficeController from '../controllers/officeController';

const router = express.Router();
const partyEndPoint = '/api/v1/parties/';
const officeEndPoint = '/api/v1/offices/';

// Party routes
router.post(partyEndPoint, PartyController.addParty);
router.get(partyEndPoint, PartyController.getAllParties);
router.get(`${partyEndPoint}:id`, PartyController.getOneParty);
router.put(`${partyEndPoint}:id`, PartyController.editParty);
router.delete(`${partyEndPoint}:id`, PartyController.deleteParty);

// Office routes
router.post(officeEndPoint, OfficeController.addOffice);
router.get(officeEndPoint, OfficeController.getAllOffices);
router.get(`${officeEndPoint}:id`, OfficeController.getOneOffice);

export default router;
