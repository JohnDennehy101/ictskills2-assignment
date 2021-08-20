import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: theme.spacing(1.5),
  },
}));

const Header = ({ title, history }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  return (
    <Paper component="div" className={classes.root}>
      <IconButton aria-label="go back" onClick={() => history.goBack()}>
        {!isMobile ? (
          <ArrowBackIcon color="primary" fontSize="large" />
        ) : (
          <ArrowBackIcon color="primary" fontSize="small" />
        )}
      </IconButton>

      {!isMobile ? (
        <Typography variant="h4" component="h3">
          {title}
        </Typography>
      ) : (
        <Typography variant="h5" component="h4">
          {title}
        </Typography>
      )}

      <IconButton aria-label="go forward" onClick={() => history.goForward()}>
        {!isMobile ? (
          <ArrowForwardIcon color="primary" fontSize="large" />
        ) : (
          <ArrowForwardIcon color="primary" fontSize="small" />
        )}
      </IconButton>
    </Paper>
  );
};

export default withRouter(Header);
