// json server
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middleWares = jsonServer.defaults();

//middleware
server.use(jsonServer.bodyParser);
server.use(middleWares);

//define api
server.get("/auth/login", (req, res) => {
  console.log("Login Success");
  return res.status(200).json("Login Success");
});

server.use(router);
server.listen(3001, () => {
  console.log("JSON server is running on 3001");
});
