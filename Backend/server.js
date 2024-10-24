const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

let networkData = {
    nodes: [{ id: 1, name: "Node 1" }, { id: 2, name: "Node 2" }], // Example nodes
    links: [] // Example links
};

app.get('/api/network', (req, res) => {
    res.json(networkData);
});

app.post('/api/network/simulate', (req, res) => {
    // Add logic to simulate traffic and update networkData
    console.log("Traffic simulation started");
    // Update networkData as needed
    res.json({ message: "Traffic simulation completed!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
