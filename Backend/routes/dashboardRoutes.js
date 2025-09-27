const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/summary', dashboardController.getSummary);
router.get('/flights', dashboardController.getFlights);
router.get('/flightsPerDay', dashboardController.getFlightsPerDay);

module.exports = router;
