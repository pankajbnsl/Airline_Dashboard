const reportRepository = require('../repositories/reportRepository');

function getMonthlyFlights() {
  return reportRepository.getReportData().monthlyFlights;
}

function getFlightTypes() {
  return reportRepository.getReportData().flightTypes;
}

function getPerformanceTrend() {
  return reportRepository.getReportData().performanceTrend;
}

function getDetailedReport() {
  return reportRepository.getReportData().detailedReport;
}

module.exports = {
  getMonthlyFlights,
  getFlightTypes,
  getPerformanceTrend,
  getDetailedReport
};
