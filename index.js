import opine from "https://deno.land/x/opine@2.2.0/mod.ts";

var app = opine();

import { registerRoutes } from "./handlers.js";

registerRoutes(app);

app.listen(8080, function () {
  console.log("Listening on port 8080 ");
});
