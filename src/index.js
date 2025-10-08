import "./styles.css";

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current%2Cdays&key=YOURKEYHERE&contentType=json`
    );
    const jsonRes = await response.json();
    return processData(jsonRes);
  } catch (err) {
    console.log(err);
  }
}

function processData(responseData) {
  const weather = {
    temp: responseData.currentConditions.temp,
    feelsLike: responseData.currentConditions.feelslike,
    conditions: responseData.currentConditions.conditions,
    icon: responseData.currentConditions.icon,
    high: responseData.days[0].tempmax,
    low: responseData.days[0].tempmin,
    precipChance: responseData.currentConditions.precipprob,
    forecastDescript: responseData.days[0].description,
  };
  return weather;
}
