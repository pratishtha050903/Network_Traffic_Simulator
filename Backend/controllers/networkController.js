const fs = require('fs');
const networkData = JSON.parse(fs.readFileSync('./data/networkData.json', 'utf8'));
const { simulateNetworkTraffic } = require('../utils/simulation');
const { routePacket } = require('../utils/routing');

exports.getNetwork = (req, res) => {
    res.json(networkData);
};

exports.simulateTraffic = (req, res) => {
    simulateNetworkTraffic(networkData);
    fs.writeFileSync('./data/networkData.json', JSON.stringify(networkData, null, 2));
    res.json({ message: 'Traffic simulation complete', networkData });
};

exports.routePacket = (req, res) => {
    const { source, destination } = req.body;
    const result = routePacket(source, destination, networkData);
    res.json(result);
};
