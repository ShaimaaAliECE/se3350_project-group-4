// json server
const path = require("path");
const fs = require("fs");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middleWares = jsonServer.defaults();

//------middlewares----//
server.use(jsonServer.bodyParser);
server.use(middleWares);

//------functions-----//

//fetch data from users.json
const getUsersDb = () => {
  return JSON.parse(
    fs.readFileSync(path.join(__direname, "user.json"), "UTF-8")
  );
};

//return user authentication result as boolean
const isAuthenticated = ({ username, password }) => {
  return (
    getUsersDb().user.findIndex(
      // check if user exists (verify user)
      (user) => user.username === username && user.password === password
    ) !== -1
  ); //not equals to -1 means that user exists
};

//generate token using jsonwebtoken library
const SECRET = "qwerty12345"; //secret key used for token decryption
const expiresIn = "1h"; //token expires in 1 hour after generation
const createToken = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn });
};

//------apis---------//

// login interface
server.post("/auth/login", (req, res) => {
  // get username and password from request
  const { username, password } = req.body;

  // return corresponding json based on user authentication result
  if (isAuthenticated({ username, password })) {
    const user = getUsersDb.users.find(
      (u) => u.username === username && u.password === password
    );
    const { username, type } = user;
    const jsonWebToken = createToken({ username, type });
    return res.status(200).json(jsonWebToken);
  } else {
    //user authentication failed
    const status = 401;
    const msg = "Wrong username or password";
    return res.status(status).json({ status, msg });
  }
});

server.use(router);
server.listen(3001, () => {
  console.log("JSON server is running on 3001");
});
