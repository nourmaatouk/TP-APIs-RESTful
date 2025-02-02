const axios = require('axios');

const API_KEY = "ckDOx7H9uPCevGXQ1Q4FpCcPoMbG2pYgDk67xcep";
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

async function getData() {
    try {
        const response = await axios.get(BASE_URL);
        console.log(response.data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

getData();
