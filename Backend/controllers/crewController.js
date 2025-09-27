const crewService = require('../services/crewService');
const { successResponse } = require('../utils/response');

function getCrewList(req, res) {
  const data = crewService.getCrewList();
  res.json(successResponse(data));
}

module.exports = {
  getCrewList
};
