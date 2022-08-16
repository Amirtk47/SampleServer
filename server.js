var express = require("express");
var registerRoutes = require("./handlers");

var app = express();
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./storage");
}

registerRoutes(app, localStorage);

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
