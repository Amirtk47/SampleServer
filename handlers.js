
export function registerRoutes(app) {
  
  app.get("/Users", (req, res) => {
    console.log("here");
    res.send([{ Name: "Person1" }, { Name: "Person2" }]);
  });
  app.get("/", (req, res) => {
    console.log("here");
    res.send("Welcome!");
  });
}
