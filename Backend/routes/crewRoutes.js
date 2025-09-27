const express = require('express');
const router = express.Router();
const crewController = require('../controllers/crewController');

router.get('/', crewController.getCrewList);

module.exports = router;
