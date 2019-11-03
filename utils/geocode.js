const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoidnphbjIwMTIiLCJhIjoiY2syYzZsenF6M2E2MjNpbnI1YmcwN295MSJ9.zk1lI2r5M8AQ7ZZZs01peA&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect the MapBox Service", undefined);
    } else if (body.features.length === 0) {
      callback(
        "Unable to find the location. Try for another search...",
        undefined
      );
    } else {
      const place = body.query;
      const coordinates = body.features[0];

      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
