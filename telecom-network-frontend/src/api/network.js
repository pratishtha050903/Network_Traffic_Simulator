import axios from 'axios';

const API_URL = 'http://localhost:5000/api/network';

export const getNetwork = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const simulateTraffic = async () => {
    await axios.post(`${API_URL}/simulate`);
};
