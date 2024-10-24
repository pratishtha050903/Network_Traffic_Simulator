// src/Components/TrafficStats.js
import React from 'react';

const TrafficStats = ({ networkData }) => {
    // Log the network data for debugging
    console.log("Network Data:", networkData);

    // Check if networkData is available
    if (!networkData) {
        return <div>Loading...</div>; // Handle loading state
    }

    return (
        <div>
            <h2>Current Traffic Stats</h2>
            <h3>Nodes:</h3>
            <ul>
                {networkData.nodes.map(node => (
                    <li key={node.id}>
                        Node {node.id}: Current Traffic = {node.currentTraffic}
                    </li>
                ))}
            </ul>
            <h3>Links:</h3>
            <ul>
                {networkData.links.map((link, index) => (
                    <li key={index}>
                        Link from {link.source} to {link.destination}: Load = {link.load}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrafficStats;
