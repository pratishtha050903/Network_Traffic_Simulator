const express = require('express');
const { getNetwork, simulateTraffic, routePacket } = require('../controllers/networkController');
const router = express.Router();

router.get('/', getNetwork);
router.post('/simulate', simulateTraffic);
router.post('/route', routePacket);

module.exports = router;
