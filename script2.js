async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "1312f56db0d0f13dd3f37e2355a9b08e"; // Replace with your OpenWeatherMap API key

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const weatherData = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
    `;
    document.getElementById("weatherInfo").innerHTML = weatherData;
  } catch (error) {
    document.getElementById("weatherInfo").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
