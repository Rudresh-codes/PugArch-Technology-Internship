const apiKey = '5ea9269ece0f0c287803a5b69fca4d80'; // Replace with your OpenWeatherMap API key

document.getElementById('get-weather').addEventListener('click', async function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        await getWeather(city);
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('weather-description');

    cityName.textContent = `City: ${data.name}`;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    description.textContent = `Weather: ${data.weather[0].description}`;
}
