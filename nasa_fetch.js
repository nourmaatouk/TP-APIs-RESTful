const API_KEY = "ckDOx7H9uPCevGXQ1Q4FpCcPoMbG2pYgDk67xcep"; 
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

async function getData() {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

getData();
