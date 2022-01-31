import decode from "jwt-decode";

//save key value as constant
const JWT = "app_token_id";

// save json web token into local storage
const setToken = (token) => {
  localStorage.setItem(JWT, token);
};

// retrieve json web token from local storage
const getToken = () => {
  return localStorage.getItem(JWT);
};

// check if a user is logged in
const isLogin = () => {
  const jwToken = getToken();
  // 
  return !!jwToken && !isTokenExpired(jwToken);
};

//check if a json web token has expired
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
  if (isLogin()) { //decode token when a user is logged in
    const user = decode(jwToken);
    return user;
  } else {
    return null;
  }
};

// logout 
const logout = () => {
  localStorage.removeItem(JWT);
};

// allows the call functions using 'global.auth.function_name';
global.auth = {
  setToken,
  getToken,
  getUser,
  isLogin,
  logout,
};
