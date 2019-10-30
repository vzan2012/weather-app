const request = require("request");

const forecast = (longitude, latitude, callback) => {
  // URL API
  const url = `https://api.darksky.net/forecast/36c68e867439bbf93474df268266b674/${longitude},${latitude}?units=si`;

  // Request Method
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect the Weather Service", undefined);
    } else if (response.body.error) {
      callback(response.body.error, undefined);
    } else {
      const data = response.body.currently;
      const temperature = data.temperature;
      const precipProbability = data.precipProbability;

      const todayForecast = response.body.daily.data[0].summary;

      callback(
        undefined,
        `${todayForecast} It is currently ${temperature} degrees out. There is a ${precipProbability} % chance of rain`
      );
    }
  });
};

module.exports = forecast;
