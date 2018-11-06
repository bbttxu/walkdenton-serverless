const { allPass, filter, gt, lt } = require("sanctuary");

const filterLatitude = require("./filterLatitude");
const filterLongitude = require("./filterLongitude");

module.exports = ({ longitude, latitude }) => arr => {
  //   const first = filterLatitude({ min: latitude.min, max: latitude.max })(
  //     filterLongitude({ min: longitude.min, max: longitude.max })(arr)
  //   );

  console.log(longitude, latitude);

  const foo = filter(
    allPass([
      ({ x }) => gt(longitude.min)(x),
      ({ x }) => lt(longitude.max)(x),
      ({ y }) => gt(latitude.min)(y),
      ({ y }) => lt(latitude.max)(y)
    ])
  )(arr);

  console.log(foo.length);
  return foo;
};
