/* eslint-disable comma-dangle */
/* eslint-disable class-methods-use-this */
import offices from '../model/offices';

class OfficeController {
  addOffice(req, res) {
    if (!req.body.type) {
      res.status(400).send({
        status: 400,
        error: 'Define office type'
      });
    } else if (!req.body.name) {
      res.status(400).send({
        status: 400,
        error: 'Office name is required'
      });
    } else {
      const office = {
        id: offices.length + 1,
        type: req.body.type,
        name: req.body.name
      };
      offices.push(office);

      res.status(201).send({
        status: 201,
        office
      });
    }
  }
}

const officeController = new OfficeController();

export default officeController;
