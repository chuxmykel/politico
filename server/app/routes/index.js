import express from 'express';
import PartyController from '../controllers/partyController';
import OfficeController from '../controllers/officeController';

const router = express.Router();
const partyEndPoint = '/api/v1/parties/';
const officeEndPoint = '/api/v1/offices/';

/**
    Party routes
*/

// Create a party
router.post(partyEndPoint, PartyController.addParty);

// Get all parties
router.get(partyEndPoint, PartyController.getAllParties);

// Get a specific party
router.get(`${partyEndPoint}:id`, PartyController.getOneParty);

// Edit a specific party
router.put(`${partyEndPoint}:id`, PartyController.editParty);

// Delete a specific party
router.delete(`${partyEndPoint}:id`, PartyController.deleteParty);

/**
    Office routes
*/

// Create an office
router.post(officeEndPoint, OfficeController.addOffice);

// Get all offices
router.get(officeEndPoint, OfficeController.getAllOffices);

export default router;
