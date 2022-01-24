import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import SelectLevel from "pages/SelectLevel";
import EditLevel from "pages/EditLevel";
import NotFound from "pages/NotFound";


//router component for switching between pages
const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* redirect to Home page */}
      <Route path="/" exact component={Home} />

      {/* redirect to login page */}
      <Route path="/login" component={Login} />

      {/* redirect to Create Account page */}
      {<Route path="/register" component={Register} />}

      {/* redirect to Select Level page */}
      <Route path="/cart" component={SelectLevel} />

      {/* redirect to Edit Level page */}
      <Route path="/orders" component={EditLevel} />

      {/* add more pages here */}

      {/* redirect to 404 page */}
      <Route component={NotFound} />
      
    </Switch>
  </BrowserRouter>
);

export default Router;