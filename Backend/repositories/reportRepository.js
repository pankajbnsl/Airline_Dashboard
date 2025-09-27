const fs = require('fs');
const path = require('path');

function getReportData() {
  const filePath = path.join(__dirname, '../data/report.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

module.exports = {
  getReportData
};
