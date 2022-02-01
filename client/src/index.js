//entry point js
import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "utils/authorization";
import { ToastContainer } from "react-toastify";

//scss files
import "./css/PageStyles.scss";
import "./css/ComponentStyles.scss";
import "./css/Theme.scss";

//  css
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <div>
    {/* container for toast notifications */}
    <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
    />
    <Router />
  </div>,
  document.getElementById("root")
);
