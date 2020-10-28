let Router = require("express").Router;
let VehiclesController = require('../controllers/vehicleController.js');

const router = Router();

// Get all users
router.get('/', VehiclesController.listAll);
router.get('/:reg', VehiclesController.listByReg);

module.exports = router;