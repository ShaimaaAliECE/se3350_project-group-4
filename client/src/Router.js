import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import SelectAlg from "pages/SelectAlg";
import SelectLevel from "pages/SelectLevel";
import EditLevel from "pages/Admin/EditLevel";
import NotFound from "pages/NotFound";
import LevelOne from "pages/Users/Levels/LevelOne";
import LevelTwo from "pages/Users/Levels/LevelTwo";
import LevelThree from "pages/Users/Levels/LevelThree";
import LevelFour from "pages/Users/Levels/LevelFour";
import LevelFive from "pages/Users/Levels/LevelFive";
import CustomLevel from "pages/Users/Levels/CustomLevel";


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

      {/* redirect to Level 2 page */}
      <Route path="/level2" component={LevelTwo} />

      {/* redirect to Level 3 page */}
      <Route path="/level3" component={LevelThree} />

      {/* redirect to Level 4 page */}
      <Route path="/level4" component={LevelFour} />

      {/* redirect to Level 5 page */}
      <Route path="/level5" component={LevelFive} />

      {/* redirect to Custom Level page */}
      <Route path="/customlevel" component={CustomLevel} />

      {/* redirect to 404 page */}
      <Route component={NotFound} />
      
    </Switch>
  </BrowserRouter>
);

export default Router;
