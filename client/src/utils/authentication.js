import decode from "jwt-decode";

const JWT = "token_id";

//getter and setter for token
const setToken = (token) => {
  localStorage.setItem(JWT, token);
};


const getToken = (token) => {
  return localStorage.getItem(JWT);
};

// login method
const isLogin = () => {
  const jwToken = getToken();
  return !!jwToken && !isTokenExpired(jwToken);
};

//Login expired method
const isTokenExpired = (token) => {
  try {
    const _info = decode(token);
    if (_info.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (error) {
    return false;
  }
};

// retrieve user information
const getUser = () => {
  const jwToken = getToken();
  if (isLogin()) {
    const user = decode(jwToken);
    return user;
  } else {
    return null;
  }
};

// logout method
const logout = () => {
  localStorage.removeItem(JWT);
};

global.auth = {
  setToken,
  getToken,
  getUser,
  isLogin,
  logout,
};
