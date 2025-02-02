const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&units=metric&lang=fr&q=";

async function getWeatherData(city) {
    const url = BASE_URL + city;
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        throw error;
    }
}

// Call the function
getWeatherData("Sousse")
    .then(data => {
        console.log("Description : " + data.weather[0].description);
        console.log("Température : " + data.main.temp + "°C");
        console.log("Humidité : " + data.main.humidity + "%");
    })
    .catch(error => {
        console.error("Erreur :", error);
    });
