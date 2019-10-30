const request = require("request");

// URL API
const url =
  "https://api.darksky.net/forecast/36c68e867439bbf93474df268266b674/37.8267,-122.4233?units=si";
// "https://api.darksky.net/forecast/36c68e867439bbf93474df268266b674/13.0827,80.2707";

// Request Method
request({ url, json: true }, (error, response) => {
  const data = response.body.currently;
  const temperature = data.temperature;
  const precipProbability = data.precipProbability;

  const todayForecast = response.body.daily.data[0].summary;

  console.log(
    `${todayForecast} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain`
  );
});

// Geocoding API
// Address -> Long/Latit -> Weather

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Paris.json?access_token=pk.eyJ1IjoidnphbjIwMTIiLCJhIjoiY2syYzZsenF6M2E2MjNpbnI1YmcwN295MSJ9.zk1lI2r5M8AQ7ZZZs01peA&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  const place = response.body.query;
  const coordinates = response.body.features[0];

  console.log(`Place: ${place}`);
  console.log(`Place Coordinates: ${coordinates.center}`);
  console.log(`Latitude: ${coordinates.center[1]}`);
  console.log(`Longitude: ${coordinates.center[0]}`);
});
