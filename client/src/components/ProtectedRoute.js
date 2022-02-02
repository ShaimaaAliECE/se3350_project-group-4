import React from "react";
import { Route, Redirect } from "react-router-dom";

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
        if (user.type === 1)  {
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

