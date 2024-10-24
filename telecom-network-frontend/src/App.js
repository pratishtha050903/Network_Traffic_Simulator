import React, { useEffect, useState } from 'react';
import NetworkGraph from './Components/NetworkGraph';
import TrafficStats from './Components/TrafficStats';
import { getNetwork, simulateTraffic } from './api/network';

function App() {
    const [networkData, setNetworkData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getNetwork();
                setNetworkData(data);
            } catch (error) {
                console.error("Error fetching network data:", error);
            }
        };
        fetchData();
    }, []);

    const handleSimulateTraffic = async () => {
        try {
            await simulateTraffic();
            const updatedData = await getNetwork();
            setNetworkData(updatedData);
        } catch (error) {
            console.error("Error during traffic simulation:", error);
        }
    };

    return (
        <div>
            <h1>Telecom Network Simulator</h1>
            <button onClick={handleSimulateTraffic}>Simulate Traffic</button>
            {networkData && (
                <>
                    <NetworkGraph networkData={networkData} />
                    <TrafficStats networkData={networkData} />
                </>
            )}
        </div>
    );
}

export default App;
