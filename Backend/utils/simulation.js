exports.simulateNetworkTraffic = (networkData) => {
    networkData.nodes.forEach(node => {
        node.currentTraffic = Math.floor(Math.random() * 100);  // Random traffic simulation
    });

    networkData.links.forEach(link => {
        link.load = Math.floor(Math.random() * 100);  // Random load simulation
    });
};
