import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export default function TrendingPageTitle({ mediaType }) {
  const useStyles = makeStyles((theme) => ({
    heading: {
      margin: "40px auto",
      fontWeight: "500",
      width: "100%",
      textAlign: "center",
    },
  }));

  const classes = useStyles();
  return (
    <>
      {mediaType === "movie" ? (
        <Typography variant="h2" className={classes.heading} gutterBottom>
          Trending {mediaType}s
        </Typography>
      ) : mediaType === "tv" ? (
        <Typography variant="h2" className={classes.heading} gutterBottom>
          Trending {mediaType.toUpperCase()} shows
        </Typography>
      ) : (
        <Typography variant="h2" className={classes.heading} gutterBottom>
          Trending People
        </Typography>
      )}
    </>
  );
}
