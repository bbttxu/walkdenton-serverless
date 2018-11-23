/**
 * A basic Intersection function
 * @param {float} longitude
 * @param {float} latitude
 * @returns {string}
 */

const inter = require('../data/inter_lite.json');

const filterLongitudeLatitude = require('../lib/filterLongitudeLatitude');

module.exports = (longitude = 0, latitude = 0, context, callback) => {
  console.log('hi');

  const start = Date.now();
  const DELTA = 0.003;

  const minLatitude = parseFloat(latitude) - DELTA;
  const maxLatitude = parseFloat(latitude) + DELTA;

  const minLongitude = parseFloat(longitude) - DELTA;
  const maxLongitude = parseFloat(longitude) + DELTA;

  const foo = filterLongitudeLatitude({
    longitude: {min: minLongitude, max: maxLongitude},
    latitude: {min: minLatitude, max: maxLatitude},
  })(inter);

  callback(null, {
    count: foo.length,
    data: foo,
    timing: {
      ms: Date.now() - start,
      start,
    },
    params: {
      latitude,
      longitude,
      delta: DELTA,
    },
  });
};
