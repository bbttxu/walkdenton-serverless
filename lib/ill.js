const lib = require('lib');

const {Promise} = require('rsvp');

module.exports = context => functionName => params =>
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
