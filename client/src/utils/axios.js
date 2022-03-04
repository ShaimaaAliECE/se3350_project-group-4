import _axios from "axios";

// change the base url when sending axios requests
const axios = (baseURL) => {
  const instance = _axios.create({
    baseURL: baseURL || process.env.REACT_APP_API_DOMAIN ||`//${window.location.host}:3001/`,
    timeout: 1500,
  });

  return instance;
};

export { axios };

export default axios();
