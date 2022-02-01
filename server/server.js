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
    fs.readFileSync(path.join(__dirname, "users.json"), "UTF-8")
  );
};

//return user authentication result as boolean
const isAuthenticated = ({ username, password }) => {
  return (
    getUsersDb().users.findIndex(
      // check if user exists (verify user)
      (user) => user.username === username && user.password === password
    ) !== -1
  ); //not equals to -1 means that user exists
};

//check if an user already exists
const isExist = (username) => {
  return (
    getUsersDb().users.findIndex((user) => user.username === username) !== -1
  );
};

//generate token using jsonwebtoken library
const SECRET = "qwerty12345"; //secret key used for token decryption
const expiresIn = "1h"; //token expires in 1 hour after generation
const generateToken = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn });
};

//------apis---------//

// login interface
server.post("/auth/login", (req, res) => {
  // get username and password from request
  const { username, password } = req.body;

  // return corresponding json based on user authentication result
  if (isAuthenticated({ username, password })) {
    const user = getUsersDb().users.find(
      (u) => u.username === username && u.password === password
    );
    const { id, type } = user;
    const jwToken = generateToken({ username, type });
    return res.status(200).json(jwToken);
  } else {
    //user authentication failed
    const status = 401;
    const message = "Incorrect username or password.";
    return res.status(status).json({ status, message });
  }
});

// Register interface
server.post("/auth/register", (req, res) => {
  const { username, password, type } = req.body;

  // check if user already exists
  if (isExist(username)) {
    const status = 401;
    const message = "user already exist";
    return res.status(status).json({ status, message });
  }

  // read data from user.json
  fs.readFile(path.join(__dirname, "users.json"), (err, _data) => {
    if (err) {
      const status = 401;
      const message = err;
      return res.status(status).json({ status, message });
    }

    // parse current user data
    const data = JSON.parse(_data.toString());
    // get the id of last user
    const last_item_id = data.users[data.users.length - 1].id;
    // add new user
    data.users.push({ id: last_item_id + 1, username, password, type });
    // write data into user.json file
    fs.writeFile(
      path.join(__dirname, "users.json"),
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });

  // create token for new user
  const jwToken = generateToken({ username, type });
  res.status(200).json(jwToken);
});

server.use(router);
server.listen(3001, () => {
  console.log("JSON server is running on 3001");
});
