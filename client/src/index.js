//entry point js
import React from "react";
import ReactDOM from "react-dom";
import Router from "Router";
import "utils/gameManager";
import IdleTimerContainer from "utils/IdleTimerContainer"
import { ToastContainer } from "react-toastify";

//scss files
import "css/PageStyles.scss";
import "css/ComponentStyles.scss";
import "css/Theme.scss";
import "css/hover.css";

// css
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <div>
    {/* container for toast notifications */}
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
    /> 
    <IdleTimerContainer></IdleTimerContainer>
    <Router />
  </div>,
  document.getElementById("root")
);
