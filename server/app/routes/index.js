import express from 'express';
import PartyController from '../controllers/partyController';
import OfficeController from '../controllers/officeController';
import UserController from '../controllers/userController';

const router = express.Router();
const homeEndPoint = '/';
const baseEndPoint = '/api/v1/';
const partyEndPoint = `${baseEndPoint}parties/`;
const officeEndPoint = `${baseEndPoint}offices/`;
const authEndPoint = `${baseEndPoint}auth/`;


// Home
router.get(homeEndPoint, (req, res) => {
  res.status(200).redirect(baseEndPoint);
});
router.get(baseEndPoint, (req, res) => {
  res.status(200).send('Welcome to politico');
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

// Users
router.post(`${authEndPoint}signup`, UserController.registerUser);

export default router;
