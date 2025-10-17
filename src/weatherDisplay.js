export function getWeatherHTML(weatherData) {
  return `
    <h2>${weatherData.resolvedAddress}</h2>
        <div class="weather-details">
          <p id="current-temp">${weatherData.temp}</p>
          <p id="weather-icon">${weatherData.icon}</p>
          <p id="current-conditions">${weatherData.conditions}</p>
          <p id="feels-like">${weatherData.feelsLike}</p>
          <p id="low-high">${weatherData.low}/${weatherData.high}</p>
          <p id="precip-chance">${weatherData.precipChance}</p>
          <p id="forecast">${weatherData.forecastDescript}</p>
        </div>`;
}
