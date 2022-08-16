var express = require("express");
var registerRoutes = require("./handlers");

var app = express();

registerRoutes(app);

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
