/**
 * A basic Intersection function
 * @param {float} longitude
 * @param {float} latitude
 * @returns {string}
 */

const { compose, filter, gt, lt, into } = require("ramda");

const filterLongitudeLatitude = ({ longitude, latitude }) => {
  const constrained = compose(
    filter(({ x }) => x > longitude.min),
    filter(({ x }) => x < longitude.max),
    filter(({ y }) => y > latitude.min),
    filter(({ y }) => y < latitude.max)
  );

  return arr => into([], constrained, arr);
};
module.exports = filterLongitudeLatitude;
