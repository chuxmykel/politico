import express from 'express';
import PartyController from '../controllers/partyController';

const router = express.Router();
const versionedEndPoint = '/api/v1/parties/';

//  party Routes
router.post(versionedEndPoint, PartyController.addOneParty);

export default router;
