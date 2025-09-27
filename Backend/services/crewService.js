const crewRepository = require('../repositories/crewRepository');

function getCrewList() {
  return crewRepository.getCrewData();
}

module.exports = {
  getCrewList
};
