import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedInUser } from "../../util";
import Snackbar from "@material-ui/core/Snackbar";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [redirect, endRedirectDelay] = useState(false);
  const [transition, setTransition] = React.useState(undefined);

  function delayRedirect() {
    setTimeout(() => endRedirectDelay(true), 3000);
  }

  useEffect(() => {
    delayRedirect();
  }, [redirect, transition]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedInUser() ? (
          <Component {...props} />
        ) : redirect ? (
          <Redirect to="/" />
        ) : (
          <Snackbar
            open={true}
            TransitionComponent={transition}
            message="Guest users cannot access protected routes. Please login with an account to access private routes."
            key={transition ? transition.name : ""}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
