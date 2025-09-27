const reportService = require('../services/reportService');
const { successResponse } = require('../utils/response');

function getMonthlyFlights(req, res) {
  const data = reportService.getMonthlyFlights();
  res.json(successResponse(data));
}

function getFlightTypes(req, res) {
  const data = reportService.getFlightTypes();
  res.json(successResponse(data));
}

function getPerformanceTrend(req, res) {
  const data = reportService.getPerformanceTrend();
  res.json(successResponse(data));
}

function getDetailedReport(req, res) {
  const data = reportService.getDetailedReport();
  res.json(successResponse(data));
}

module.exports = {
  getMonthlyFlights,
  getFlightTypes,
  getPerformanceTrend,
  getDetailedReport
};
