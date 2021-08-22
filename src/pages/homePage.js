import React from "react";
import Spinner from "../components/spinner";
import {
  getUserAccount,
  createRequestToken,
  askUserForAuthentication,
  createGuestSession,
} from "../api/tmdb-api";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
    display: "flex",
    height: "70vh",
    justifyContent: "center",
    alignContent: "center",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const HomePage = (props) => {
  const classes = useStyles();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    async function manageUserSession() {
      let sessionId, guestSessionId;

      guestSessionId = localStorage.getItem("guest-session");
      sessionId = localStorage.getItem("session");
      if (sessionId) {
        await getUserAccount(sessionId);
        window.location.href = "/movies";
      } else if (guestSessionId) {
        window.location.href = "/movies";
      } else {
        setShowSpinner(false);
      }
    }

    manageUserSession();
  }, []);

  const handleUserSessionButtonClick = async () => {
    let requestTokenResponse = await createRequestToken();
    let requestToken = requestTokenResponse.request_token;
    await askUserForAuthentication(requestToken);
  };

  const handleGuestSessionButtonClick = async () => {
    let requestTokenResponse = await createGuestSession();
    localStorage.setItem(
      "guest-session",
      requestTokenResponse.guest_session_id
    );
    window.location.href = "/movies";
  };

  return (
    <>
      <main>
        {showSpinner ? (
          <Spinner />
        ) : (
          <div className={classes.heroContent}>
            <Container maxWidth="sm" className={classes.content}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                TMDB Client
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                A web application that provides information on movies and tv
                shows from the 3rd party TMDB API.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleUserSessionButtonClick}
                    >
                      Sign In / Sign Up
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleGuestSessionButtonClick}
                    >
                      Guest Session
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        )}
      </main>
    </>
  );
};

export default HomePage;
