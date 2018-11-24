const { Suite } = require("benchmark");

const suite = new Suite();

const A = require("./lib/filterLongitudeLatitudeA");
const B = require("./lib/filterLongitudeLatitudeB");
const C = require("./lib/filterLongitudeLatitudeC");
const D = require("./lib/filterLongitudeLatitudeD");
const E = require("./lib/filterLongitudeLatitudeE");

const data = require("./data/inter_lite.json");

const constraints = {
  longitude: {
    min: 0,
    max: 0
  },
  latitude: { min: 0, max: 0 }
};

// add tests
suite
  .add("A", function() {
    A(constraints)(data);
  })
  .add("B", function() {
    B(constraints)(data);
  })
  .add("C", function() {
    C(constraints)(data);
  })
  .add("D", function() {
    D(constraints)(data);
  })
  .add("E", function() {
    E(constraints)(data);
  })
  // add listeners
  .on("cycle", function(event) {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: true });
