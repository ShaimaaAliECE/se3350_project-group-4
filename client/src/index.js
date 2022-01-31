//entry point js
import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import { NotificationContainer } from "react-notifications";

//scss files
import "./css/PageStyles.scss";
import "./css/ComponentStyles.scss";
import "./css/Theme.scss";

// notification css
import "react-notifications/lib/notifications.css";

ReactDOM.render(
  <div>
    {/* container for toast notifications */}
    <NotificationContainer />
    <Router />
  </div>,
  document.getElementById("root")
);
