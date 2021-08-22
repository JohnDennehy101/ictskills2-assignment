import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import { withRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  tagLine: {
    fontSize: "1.5rem",
  },
  tagLineMobile: {
    fontSize: "1rem",
  }
}));

const HeaderContent = ({ movie, history, mediaType }) => {
  let title = mediaType === "movie" ? movie.title : movie.name;

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper component="div" className={classes.root}>
      {isMobile ? (
        <>
          {" "}
          <IconButton aria-label="go back" onClick={() => history.goBack()}>
            <ArrowBackIcon color="primary" fontSize="small" />
          </IconButton>
          <Typography variant="h5" component="h5">
            {title}
            <a href={movie.homepage}>
              <HomeIcon color="primary" />
            </a>
            <br />
            <span className={classes.tagLineMobile}>{`${movie.tagline}`} </span>
          </Typography>{" "}
          <IconButton
            aria-label="go forward"
            onClick={() => history.goForward()}
          >
            <ArrowForwardIcon color="primary" fontSize="small" />
          </IconButton>
        </>
      ) : (
        <>
          <IconButton aria-label="go back" onClick={() => history.goBack()}>
            <ArrowBackIcon color="primary" fontSize="large" />
          </IconButton>
          <Typography variant="h4" component="h3">
            {title}
            <a href={movie.homepage}>
              <HomeIcon color="primary" />
            </a>
            <br />
            <span className={classes.tagLine}>{`${movie.tagline}`} </span>
          </Typography>
          <IconButton
            aria-label="go forward"
            onClick={() => history.goForward()}
          >
            <ArrowForwardIcon color="primary" fontSize="large" />
          </IconButton>
        </>
      )}
    </Paper>
  );
};

export default withRouter(HeaderContent);
