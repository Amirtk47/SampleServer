import opine from "https://deno.land/x/opine@2.2.0/mod.ts";

var app = opine();

app.get("/Users", (req, res) => {
  console.log("here");
  res.send([{ Name: "Person1" }, { Name: "Person2" }]);
});
app.get("/", (req, res) => {
  console.log("here");
  res.send("Welcome!");
});

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
