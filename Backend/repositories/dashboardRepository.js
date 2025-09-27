const fs = require('fs');
const path = require('path');

function getDashboardData() {
  const filePath = path.join(__dirname, '../data/dashboard.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

module.exports = {
  getDashboardData
};
