const request = require("request");

const API_KEY = "ckDOx7H9uPCevGXQ1Q4FpCcPoMbG2pYgDk67xcep"; 
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

function getData(callback) {
    request(BASE_URL, function (error, response, body) {
        if (error) {
            callback(error, null);
            return;
        }

        try {
            const data = JSON.parse(body);
            callback(null, data);
        } catch (parseError) {
            callback("Invalid JSON response received from API", null);
        }
    });
}

getData((error, data) => {
    if (!error) {
        console.log(data);
    } else {
        console.error("Error:", error);
    }
});


