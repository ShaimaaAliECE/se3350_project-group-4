import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RequireLoginRoute, AdminRoute } from "components/ProtectedRoute";
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
import Analytics from "pages/Admin/Analytics/Analytics";

//router component for switching between pages
const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* redirect to Home page */}
      <Route path="/" exact component={Home} />

      {/* redirect to login page */}
      <Route path="/login" component={Login} />

      {/* redirect to Create Account page */}
      <Route path="/register" component={Register} />

      {/* redirect to Select Algorithm page */}
      <RequireLoginRoute path="/alg" component={SelectAlg} />

      {/* redirect to Select Level page */}
      <RequireLoginRoute path="/select" component={SelectLevel} />

      {/* redirect to Edit Level page */}
      <AdminRoute path="/edit" component={EditLevel} />

      {/* redirect to analytics Level page */}
      <AdminRoute path="/analytics" component={Analytics} />

      {/* redirect to Level 1 page */}
      <RequireLoginRoute path="/level1" component={LevelOne} />

      {/* redirect to Level 2 page */}
      <RequireLoginRoute path="/level2" component={LevelTwo} />

      {/* redirect to Level 3 page */}
      <RequireLoginRoute path="/level3" component={LevelThree} />

      {/* redirect to Level 4 page */}
      <RequireLoginRoute path="/level4" component={LevelFour} />

      {/* redirect to Level 5 page */}
      <RequireLoginRoute path="/level5" component={LevelFive} />

      {/* redirect to Custom Level page */}
      <RequireLoginRoute path="/custom" component={CustomLevel} />

      {/* redirect to 404 page */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
