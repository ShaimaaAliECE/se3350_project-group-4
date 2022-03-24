import decode from "jwt-decode"; //used for decoding jwt
import BACKGROUNDMUSIC from "assets/audios/BGM.mp3";

//save key value as constant
const JWT = "app_token_id";
const CurrentLevel = "current_level";
const Health = "health";

// set current level
const setCurrentLevel = (levelNumber) => {
  localStorage.setItem(CurrentLevel, levelNumber);
};

// get which level the user is on
const getCurrentLevel = () => {
  return localStorage.getItem(CurrentLevel);
};

// set health
const setCurrentHealth = (lives) => {
  localStorage.setItem(Health, lives);
};

// getHealth
const getCurrentHealth = () => {
  return localStorage.getItem(Health);
};

// -1 live
const decreaseHealth = () => {
  let _health = getCurrentHealth() - 1;
  localStorage.setItem(Health, _health);
};

// play audio 
const playBGM = (vol) => {
  var myAudio = new Audio(BACKGROUNDMUSIC); 
  myAudio.volume = vol;
  myAudio.play();
}

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
  return !!jwToken && !isTokenExpired(jwToken);
};

//check if a json web token has expired
const isTokenExpired = (token) => {
  try {
    const login_info = decode(token);
    // if token expiration date is lesser than current time
    if (login_info.exp < Date.now() / 1000) {
      return true; //token is expired
    } else return false; //token is valid
  } catch (error) {
    return false;
  }
};

// retrieve user information
const getUser = () => {
  const jwToken = getToken();
  if (isLogin()) {
    //decode token when a user is logged in
    const user = decode(jwToken);
    return user;
  } else {
    return null;
  }
};

// logout (remove json web token from local storage)
const logout = () => {
  localStorage.removeItem(JWT);
};

// allows the call functions using 'global.auth.function_name';
global.auth = {
  setToken,
  getToken,
  setCurrentHealth,
  decreaseHealth,
  getCurrentHealth,
  setCurrentLevel,
  getCurrentLevel,
  playBGM,
  getUser,
  isLogin,
  logout,
};
