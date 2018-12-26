const distanceFrom = ({ latitude, longitude }) => ({ y, x }) => {
  const dLatitude = latitude - y;
  const dLongitude = longitude - x;

  const lat2 = dLatitude * dLatitude;
  const lng2 = dLongitude * dLongitude;

  return Math.sqrt(lat2 + lng2);
};

module.exports = distanceFrom;
