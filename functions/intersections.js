/**
 * A basic Intersection function
 * @param {float} longitude
 * @param {float} latitude
 * @returns {string}
 */

const { map, take, sortBy, prop } = require("ramda");

const inter = require("../data/inter_lite.json");

const filterLongitudeLatitude = require("../lib/filterLongitudeLatitude");

const distanceFrom = require("../lib/distanceFrom");

module.exports = (longitude = 0, latitude = 0, context, callback) => {
  const start = Date.now();
  const DELTA = 0.002;

  const distanceFromCenter = distanceFrom({ latitude, longitude });

  const minLatitude = parseFloat(latitude) - DELTA;
  const maxLatitude = parseFloat(latitude) + DELTA;

  const minLongitude = parseFloat(longitude) - DELTA;
  const maxLongitude = parseFloat(longitude) + DELTA;

  const foo = filterLongitudeLatitude({
    longitude: { min: minLongitude, max: maxLongitude },
    latitude: { min: minLatitude, max: maxLatitude }
  })(inter);

  const bar = map(intersection => {
    intersection.distance = distanceFromCenter(intersection);
    return intersection;
  }, foo);

  const baz = take(10, sortBy(prop("distance"), bar));

  callback(null, {
    data: baz,
    n: baz.length,
    timing: {
      ms: Date.now() - start,
      start
    },
    params: {
      latitude,
      longitude,
      delta: DELTA
    }
  });
};
