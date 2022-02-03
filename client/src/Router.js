import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SelectAlg from "./pages/SelectAlg";
import SelectLevel from "./pages/SelectLevel";
import EditLevel from "./pages/EditLevel";
import NotFound from "./pages/NotFound";
import LevelOne from "./pages/LevelOne";
import CustomLevel from "./pages/CustomLevel";

import LevelTwo from "./pages/LevelTwo";


//router component for switching between pages
const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* redirect to Home page */}
      <Route path="/" exact component={Home} />

      {/* redirect to login page */}
      <Route path="/login" component={Login} />

      {/* redirect to Create Account page */}
      {<Route path="/register" component= {Register} />}

      {/* redirect to Select Algorithm page */}
      <Route path="/alg" component={SelectAlg} />

      {/* redirect to Select Level page */}
      <Route path="/select" component={SelectLevel} />

      {/* redirect to Edit Level page */}
      <Route path="/edit" component={EditLevel} />

      {/* redirect to Level 1 page */}
      <Route path="/level1" component={LevelOne} />

      {/* redirect to Level 1 page */}
      <Route path="/customlevel" component={CustomLevel} />

      <Route path="/LevelOne" component={LevelOne} />

      <Route path="/LevelTwo" component={LevelTwo} />

      {/* redirect to 404 page */}
      <Route component={NotFound} />
      
    </Switch>
  </BrowserRouter>
);

export default Router;
