
export function registerRoutes(app, localStorage) {

  app.get("/Send", (req, res) => {
    let value = req.query.value;
    localStorage.setItem("SampleValue", value);
    res.status(200).send("saved");
  });

  app.get("/Receive", (req, res) => {
    let value = localStorage.getItem("SampleValue");
    res.send(value);
  });
  
  app.get("/Users", (req, res) => {
    console.log("here");
    res.send([{ Name: "Person1" }, { Name: "Person2" }]);
  });
  app.get("/", (req, res) => {
    console.log("here");
    res.send("Welcome!");
  });
}
