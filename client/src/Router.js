import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "pages/Home";
import Loading from "components/Loading"

// lazy components for route based code splitting with react router
const LazyLogin = React.lazy(() => import("pages/Login"));
const LazyRegister = React.lazy(() => import("pages/Register"));
const LazySelectAlg = React.lazy(() => import("pages/SelectAlg"));
const LazySelectLevel = React.lazy(() => import("pages/SelectLevel"));
const LazyEditLevel = React.lazy(() => import("pages/Admin/EditLevel"));
const LazyNotFound = React.lazy(() => import("pages/NotFound"));
const LazyLevelOne = React.lazy(() => import("pages/Users/Levels/LevelOne"));
const LazyLevelTwo = React.lazy(() => import("pages/Users/Levels/LevelTwo"));
const LazyLevelThree = React.lazy(() => import("pages/Users/Levels/LevelThree"));
const LazyLevelFour = React.lazy(() => import("pages/Users/Levels/LevelFour"));
const LazyLevelFive = React.lazy(() => import("pages/Users/Levels/LevelFive"));
const LazyCustomLevel = React.lazy(() => import("pages/Users/Levels/CustomLevel"));
const LazyAnalytics = React.lazy(() => import("pages/Admin/Analytics/Analytics"));

//router component for switching between pages
const Router = () => (
  <BrowserRouter>
    <Switch>
      <React.Suspense fallback={<Loading/>}>
        {/* redirect to Home page */}
        <Route path="/" exact component={Home} />

        {/* redirect to login page */}
        <Route path="/login" component={LazyLogin} />

        {/* redirect to Create Account page */}
        <Route path="/register" component={LazyRegister} />

        {/* redirect to Select Algorithm page */}
        <RequireLoginRoute path="/alg" component={LazySelectAlg} />

        {/* redirect to Select Level page */}
        <RequireLoginRoute path="/ms/select" component={LazySelectLevel} />

        {/* redirect to Edit Level page */}
        <AdminRoute path="/ms/edit" component={LazyEditLevel} />

        {/* redirect to analytics Level page */}
        <AdminRoute path="/ms/analytics" component={LazyAnalytics} />

        {/* redirect to Level 1 page */}
        <RequireLoginRoute path="/ms/level1" component={LazyLevelOne} />

        {/* redirect to Level 2 page */}
        <RequireLoginRoute path="/ms/level2" component={LazyLevelTwo} />

        {/* redirect to Level 3 page */}
        <RequireLoginRoute path="/ms/level3" component={LazyLevelThree} />

        {/* redirect to Level 4 page */}
        <RequireLoginRoute path="/ms/level4" component={LazyLevelFour} />

        {/* redirect to Level 5 page */}
        <RequireLoginRoute path="/ms/level5" component={LazyLevelFive} />

        {/* redirect to Custom Level page */}
        <RequireLoginRoute path="/ms/custom" component={LazyCustomLevel} />

        {/* redirect to 404 page */}
        <Route component={LazyNotFound} />
      </React.Suspense>
    </Switch>
  </BrowserRouter>
);

export default Router;

// Used for limiting access to pages that require login
export const RequireLoginRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (global.auth.isLogin()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

// Used for limiting access to admin only pages
export const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const user = global.auth.getUser() || {};
        if (user.type === 1) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/NotFound",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
