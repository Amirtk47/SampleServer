var express = require("express");
var router = express.Router();

import {registerRoutes} from "./handlers"

registerRoutes(router);

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
