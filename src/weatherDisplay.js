export function getWeatherHTML(weatherData) {
  return `
    <h2>${weatherData.resolvedAddress}</h2>
        <div class="weather-details">
          <p id="current-temp">${weatherData.temp}&deg; F</p>
          <p id="weather-icon"><img src=${weatherData.icon} /></p>
          <p id="current-conditions">${weatherData.conditions}</p>
          <p id="feels-like">Feels like ${weatherData.feelsLike}&deg; F</p>
          <p id="low-high">${weatherData.low}&deg; F / ${weatherData.high}&deg; F</p>
          <p id="precip-chance">${weatherData.precipChance}% Precipitation</p>
          <p id="forecast">${weatherData.forecastDescript}</p>
        </div>`;
}
