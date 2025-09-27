const dashboardService = require('../services/dashboardService');
const { successResponse } = require('../utils/response');

function getSummary(req, res) {
  const summary = dashboardService.getSummary();
  res.json(successResponse(summary));
}

function getFlights(req, res) {
  const flights = dashboardService.getFlights();
  res.json(successResponse(flights));
}

function getFlightsPerDay(req, res) {
  const flightsPerDay = dashboardService.getFlightsPerDay();
  res.json(successResponse(flightsPerDay));
}

module.exports = {
  getSummary,
  getFlights,
  getFlightsPerDay
};
