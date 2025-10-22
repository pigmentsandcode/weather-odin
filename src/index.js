import "./styles.css";
import { getWeatherHTML, getDummyHTML } from "./weatherDisplay";

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current%2Cdays&iconSet=icons2&key=YOUR_KEY_HERE&contentType=json`
    );
    const jsonRes = await response.json();
    const weatherSectionEl = document.querySelector("#weather-info");
    const processedData = await processData(jsonRes);
    const weatherHTML = getWeatherHTML(processedData);
    weatherSectionEl.innerHTML = "";
    weatherSectionEl.insertAdjacentHTML("beforeend", weatherHTML);
  } catch (err) {
    console.log(err);
  }
}

async function processData(responseData) {
  let icon = await import(`./icons/${responseData.currentConditions.icon}.png`);
  const iconSrc = icon.default;
  const weather = {
    resolvedAddress: responseData.resolvedAddress,
    temp: responseData.currentConditions.temp,
    feelsLike: responseData.currentConditions.feelslike,
    conditions: responseData.currentConditions.conditions,
    icon: iconSrc,
    high: responseData.days[0].tempmax,
    low: responseData.days[0].tempmin,
    precipChance: responseData.currentConditions.precipprob,
    forecastDescript: responseData.days[0].description,
  };
  return weather;
}

function handleClickSearch(e) {
  e.preventDefault();
  const cityInput = document.querySelector("#city");
  if (cityInput.validity.patternMismatch) {
    cityInput.setCustomValidity("Please enter a city name!");
  } else {
    const city = cityInput.value;
    const state = document.querySelector("#state").value;
    const locationToSearch = city.trim() + ", " + state;
    console.log("location: " + locationToSearch);
    getWeatherData(locationToSearch);
  }
}

const searchBtnEl = document.querySelector("#search-btn");
searchBtnEl.addEventListener("click", handleClickSearch);
