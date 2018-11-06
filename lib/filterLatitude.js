const { allPass, filter, gte, lte } = require("sanctuary");

module.exports = ({ min = 0, max = 0 }) =>
  filter(({ y }) => allPass([lte(max), gte(min)])(y));
