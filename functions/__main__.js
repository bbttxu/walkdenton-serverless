/**
 * A basic Intersection function
 * @param {float} longitude
 * @param {float} latitude
 * @returns {string}
 */

const {hash} = require('rsvp');

const ill = require('../lib/ill');

module.exports = (longitude = 0, latitude = 0, context, callback) =>
  hash({
    streets: ill(context)('streets')({longitude, latitude}),
    intersections: ill(context)('intersections')({latitude, longitude}),
  })
    .then(result => callback(null, result))
    .catch(callback);
