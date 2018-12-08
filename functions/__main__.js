/**
 * A basic Intersection function
 * @param {float} longitude
 * @param {float} latitude
 * @returns {string}
 */

const lib = require('lib');

const {Promise, all, hash} = require('rsvp');

const ill = context => functionName => params =>
  new Promise((resolve, reject) => {
    lib[`${context.service.identifier}.${functionName}`](
      params,
      (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      },
    );
  });

module.exports = (longitude = 0, latitude = 0, context, callback) =>
  hash({
    streets: ill(context)('streets')({longitude, latitude}),
    intersections: ill(context)('intersections')({latitude, longitude}),
  })
    .then(result => callback(null, result))
    .catch(callback);
