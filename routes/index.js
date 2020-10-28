let Router = require("express").Router;
let vehicleRoutes = require('./vehicleRoutes.js');

const routes = Router();

// Define vehicle routes
routes.use('/vehicles', vehicleRoutes);

module.exports = {
    routes
};