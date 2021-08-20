import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedInUser, existingGuestSession } from "../../util";
import Snackbar from "@material-ui/core/Snackbar";

const PublicRoute = ({ component: Component, ...rest }) => {
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
        isLoggedInUser() || existingGuestSession() ? (
          <Component {...props} />
        ) : redirect ? (
          <Redirect to="/" />
        ) : (
          <Snackbar
            open={true}
            TransitionComponent={transition}
            message="Please login / create a guest session to access this page."
            key={transition ? transition.name : ""}
          />
        )
      }
    />
  );
};

export default PublicRoute;
