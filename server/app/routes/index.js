import express from 'express';
import PartyController from '../controllers/partyController';

const router = express.Router();
const versionedEndPoint = '/api/v1/parties/';

//  party Routes

//  Create one party
router.post(versionedEndPoint, PartyController.addOneParty);

//  Get all parties
router.get(versionedEndPoint, PartyController.getAllParties);

// Get specific party
router.get(`${versionedEndPoint}:id`, PartyController.getOneParty);

export default router;
