import decode from "jwt-decode"; //used for decoding jwt
import BACKGROUNDMUSIC from "assets/audios/BGM.mp3";
import BACKGROUNDMUSIC_2 from "assets/audios/BGM2.mp3";

//save key value as constant
const JWT = "app_token_id";
const CurrentLevel = "current_level";
const Health = "health";
const AudioPlaying = "audio";

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


const setIsPlayingBGM = (bool) => {
  localStorage.setItem(AudioPlaying, bool);
};

const getIsPlayingBGM = () => {
  return localStorage.getItem(AudioPlaying);
};


var myAudio = new Audio(BACKGROUNDMUSIC); 
// play audio 
const playBGM = (vol) => {
  myAudio.volume = vol;
  myAudio.play();
}

// play audio 
const pauseBGM = (vol) => {
  myAudio.pause();
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
  getIsPlayingBGM,
  setIsPlayingBGM,
  playBGM,
  getUser,
  isLogin,
  logout,
  pauseBGM
};
