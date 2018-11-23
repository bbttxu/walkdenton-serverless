const {Suite} = require('benchmark');

const suite = new Suite();

const filterLongitudeLatitudeA = require('./lib/filterLongitudeLatitudeA');
const filterLongitudeLatitudeB = require('./lib/filterLongitudeLatitudeB');
const data = require('./data/inter_lite.json');

const constraints = {
  longitude: {
    min: 0,
    max: 0,
  },
  latitude: {min: 0, max: 0},
};

// add tests
suite
  .add('A', function() {
    filterLongitudeLatitudeA(constraints)(data);
  })
  .add('B', function() {
    filterLongitudeLatitudeB(constraints)(data);
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({async: true});
