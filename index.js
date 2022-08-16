import opine from "https://deno.land/x/opine@2.2.0/mod.ts";

var app = opine();

import {registerRoutes} from "./handlers"

registerRoutes(app);

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
