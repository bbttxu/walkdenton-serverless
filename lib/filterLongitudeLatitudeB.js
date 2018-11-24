/**
 * A basic Intersection function
 * @param {float} longitude
 * @param {float} latitude
 * @returns {string}
 */

const { allPass, filter, gt, lt } = require("ramda");

const filterLongitudeLatitude = ({ longitude, latitude }) => arr =>
  filter(
    allPass([
      ({ x }) => gt(longitude.min)(x),
      ({ x }) => lt(longitude.max)(x),
      ({ y }) => gt(latitude.min)(y),
      ({ y }) => lt(latitude.max)(y)
    ])
  )(arr);

module.exports = filterLongitudeLatitude;
