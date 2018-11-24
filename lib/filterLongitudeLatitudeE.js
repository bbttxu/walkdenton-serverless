const { compose, filter, into } = require("ramda");

const filterLongitudeLatitude = ({ longitude, latitude }) => {
  const constrained = compose(
    filter(
      ({ x, y }) =>
        x > longitude.min &&
        x < longitude.max &&
        y > latitude.min &&
        y < latitude.max
    )
  );

  return arr => into([], constrained, arr);
};
module.exports = filterLongitudeLatitude;
