/*
_________  ________    _______    ____________________
\_   ___ \ \_____  \   \      \  /   _____/\__    ___/
/    \  \/  /   |   \  /   |   \ \_____  \   |    |
\     \____/    |    \/    |    \/        \  |    |
 \______  /\_______  /\____|__  /_______  /  |____|
        \/         \/         \/        \/
        CONST */

// const LATITUDE = 33.225214199999996;
// const LONGITUDE = -97.13234560000001;
// const DELTA = 0.002;

// const minLatitude = LATITUDE - DELTA;
// const maxLatitude = LATITUDE + DELTA;

// const minLongitude = LONGITUDE - DELTA;
// const maxLongitude = LONGITUDE + DELTA;

/*
    .___       __
  __| _/____ _/  |______
 / __ |\__  \\   __\__  \
/ /_/ | / __ \|  |  / __ \_
\____ |(____  /__| (____  /
     \/     \/          \/
     data */

const inter = require("./data/inter_lite.json");

/*
.__  ._____.                      .__
|  | |__\_ |______________ _______|__| ____   ______
|  | |  || __ \_  __ \__  \\_  __ \  |/ __ \ /  ___/
|  |_|  || \_\ \  | \// __ \|  | \/  \  ___/ \___ \
|____/__||___  /__|  (____  /__|  |__|\___  >____  >
             \/           \/              \/     \/
             Libraries */

const filterLongitudeLatitude = require("./lib/filterLongitudeLatitude");

/*
  _____                    __  .__
_/ ____\_ __  ____   _____/  |_|__| ____   ____   ______
\   __\  |  \/    \_/ ___\   __\  |/  _ \ /    \ /  ___/
 |  | |  |  /   |  \  \___|  | |  (  <_> )   |  \\___ \
 |__| |____/|___|  /\___  >__| |__|\____/|___|  /____  >
                 \/     \/                    \/     \/
                 functions */

const respond = (req, res, next) => {
  const { latitude, longitude } = req.params;
  console.log(req.params);

  //   const LATITUDE = 33.225214199999996;
  //   const LONGITUDE = -97.13234560000001;
  const DELTA = 0.003;

  const minLatitude = parseFloat(latitude) - DELTA;
  const maxLatitude = parseFloat(latitude) + DELTA;

  const minLongitude = parseFloat(longitude) - DELTA;
  const maxLongitude = parseFloat(longitude) + DELTA;

  res.send(
    filterLongitudeLatitude({
      longitude: { min: minLongitude, max: maxLongitude },
      latitude: { min: minLatitude, max: maxLatitude }
    })(inter)
  );
  next();
};

/*
                                __          _____  _____
_______ __ __  ____     _______/  |_ __ ___/ ____\/ ____\
\_  __ \  |  \/    \   /  ___/\   __\  |  \   __\\   __\
 |  | \/  |  /   |  \  \___ \  |  | |  |  /|  |   |  |
 |__|  |____/|___|  / /____  > |__| |____/ |__|   |__|
                  \/       \/
                  run stuff */

var restify = require("restify");

var server = restify.createServer();
server.get("/intersections/near/:latitude/:longitude", respond);

server.listen(8080, function() {
  console.log("%s listening at %s", server.name, server.url);
});
