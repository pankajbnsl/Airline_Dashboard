const fs = require('fs');
const path = require('path');

function getCrewData() {
  const filePath = path.join(__dirname, '../data/crew.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

module.exports = {
  getCrewData
};
