const dashboardRepository = require('../repositories/dashboardRepository');

function getSummary() {
  const data = dashboardRepository.getDashboardData();
  return data.summary;
}

function getFlights() {
  const data = dashboardRepository.getDashboardData();
  return data.flights;
}

function getFlightsPerDay() {
  const data = dashboardRepository.getDashboardData();
  return data.flightsPerDay;
}

module.exports = {
  getSummary,
  getFlights,
  getFlightsPerDay
};
