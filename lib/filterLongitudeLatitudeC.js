/**
 * A basic Intersection function
 * @param {float} longitude
 * @param {float} latitude
 * @returns {string}
 */

const { compose, filter, gt, lt, into } = require("ramda");

const filterLongitudeLatitude = ({ longitude, latitude }) => {
  const constrained = compose(
    filter(({ x }) => gt(x)(longitude.min)),
    filter(({ x }) => lt(x)(longitude.max)),
    filter(({ y }) => gt(y)(latitude.min)),
    filter(({ y }) => lt(y)(latitude.max))
  );

  return arr => into([], constrained, arr);
};
module.exports = filterLongitudeLatitude;
