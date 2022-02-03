//entry point js
import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";

//scss files
import "./css/PageStyles.scss";
import "./css/ComponentStyles.scss";
import "./css/theme.scss";

ReactDOM.render(<Router />, document.getElementById("root"));
