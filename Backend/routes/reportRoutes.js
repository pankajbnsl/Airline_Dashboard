const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/monthlyFlights', reportController.getMonthlyFlights);
router.get('/flightTypes', reportController.getFlightTypes);
router.get('/performanceTrend', reportController.getPerformanceTrend);
router.get('/detailedReport', reportController.getDetailedReport);

module.exports = router;
