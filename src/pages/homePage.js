import React from "react";
import Spinner from "../components/spinner";
import {
  getUserAccount,
  createRequestToken,
  askUserForAuthentication,
} from "../api/tmdb-api";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

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

  useEffect(() => {
    async function manageUserSession() {
      let checkValidSession, sessionId;

      sessionId = localStorage.getItem("session");
      if (sessionId) {
        checkValidSession = await getUserAccount(sessionId);
        window.location.href = "/movies";
      }
    }

    manageUserSession();
  }, []);

  const handleUserSessionButtonClick = async () => {
    let requestTokenResponse = await createRequestToken();
    let requestToken = requestTokenResponse.request_token;
    await askUserForAuthentication(requestToken);
  };

  return (
    <>
      <main>
        {/* Hero unit */}
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
              A web application that provides information on movies and tv shows
              from the 3rd party TMDB API.
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
                  <Button variant="outlined" color="primary">
                    Guest Session
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default HomePage;
