exports.routePacket = (source, destination, networkData) => {
    const packet = { source, destination, status: 'In Transit' };

    // Simple direct link lookup
    const link = networkData.links.find(
        link => link.source === source && link.destination === destination
    );

    if (link) {
        packet.status = 'Delivered';
    } else {
        packet.status = 'Failed';
    }

    return packet;
};
