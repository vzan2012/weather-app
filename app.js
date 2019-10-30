const request = require("request");
const geocode = require("./utils/geocode");

// URL API
const url =
  "https://api.darksky.net/forecast/36c68e867439bbf93474df268266b674/37.8267,-122.4233?units=si";
// "https://api.darksky.net/forecast/36c68e867439bbf93474df268266b674/13.0827,80.2707";

// Request Method
// request({ url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect the Weather Service");
//   } else if (response.body.error) {
//     console.log(response.body.error);
//   } else {
//     const data = response.body.currently;
//     const temperature = data.temperature;
//     const precipProbability = data.precipProbability;

//     const todayForecast = response.body.daily.data[0].summary;

//     console.log(
//       `${todayForecast} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain`
//     );
//   }
// });

geocode("Paris", (error, data) => {
  console.log(`Error: ${error}`);
  console.log(`Data: ${JSON.stringify(data)}`);
});
