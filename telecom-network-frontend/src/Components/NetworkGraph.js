// src/Components/NetworkGraph.js
import React from 'react';
import { XYPlot, MarkSeries, XAxis, YAxis } from 'react-vis';

const NetworkGraph = ({ networkData }) => {
    // Transforming node data for visualization
    const nodes = networkData.nodes.map((node, index) => ({
        x: index * 100, // Position nodes on the X-axis
        y: Math.random() * 100, // Random Y position
        id: node.id,
        currentTraffic: node.currentTraffic,
    }));

    // Prepare links for visualization
    const links = networkData.links.map(link => {
        const sourceNode = nodes.find(node => node.id === link.source);
        const destNode = nodes.find(node => node.id === link.destination);
        return {
            x1: sourceNode.x,
            y1: sourceNode.y,
            x2: destNode.x,
            y2: destNode.y,
            load: link.load,
        };
    });

    return (
        <div>
            <XYPlot width={400} height={400}>
                {/* Draw links */}
                {links.map((link, index) => (
                    <line
                        key={index}
                        x1={link.x1}
                        y1={link.y1}
                        x2={link.x2}
                        y2={link.y2}
                        stroke="black"
                    />
                ))}
                {/* Draw nodes */}
                <MarkSeries
                    data={nodes}
                    onValueClick={value => console.log(value)}
                    size={5
                } />
                <XAxis />
                <YAxis />
            </XYPlot>
        </div>
    );
};

export default NetworkGraph;
