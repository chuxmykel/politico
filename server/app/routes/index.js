import express from 'express';
import PartyController from '../controllers/partyController';

const router = express.Router();
const versionedEndPoint = '/api/v1/parties/';

//  party Routes

//  Get one party
router.post(versionedEndPoint, PartyController.addOneParty);

//  Get all parties
router.get(versionedEndPoint, PartyController.getAllParties);

export default router;
