import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export default function TrendingPageTitle({ mediaType, isMobile }) {
  const useStyles = makeStyles((theme) => ({
    heading: {
      margin: "40px auto",
      fontWeight: "500",
      width: "100%",
      textAlign: "center",
    },
    headingMobile: {
      margin: "10px auto",
      fontWeight: "500",
      width: "100%",
      textAlign: "center",
    }
  }));

  const classes = useStyles();
  return (
    <>
      {mediaType === "movie" && !isMobile ? (
        <Typography variant="h2" className={classes.heading} gutterBottom>
          Trending {mediaType}s
        </Typography>
      ) : mediaType === "movie" && isMobile ? (
         <Typography variant="h4" className={classes.headingMobile} gutterBottom>
          Trending {mediaType}s
        </Typography> 
      ) : mediaType === "tv" && !isMobile ? (
        <Typography variant="h2" className={classes.heading} gutterBottom>
          Trending {mediaType.toUpperCase()} shows
        </Typography>
      ) : mediaType === "tv" && isMobile ? ( <Typography variant="h4" className={classes.headingMobile} gutterBottom>
          Trending {mediaType.toUpperCase()} shows
        </Typography>): !isMobile ? (
        <Typography variant="h2" className={classes.heading} gutterBottom>
          Trending People
        </Typography>
      ) : (<Typography variant="h4" className={classes.headingMobile} gutterBottom>
          Trending People
        </Typography>)}
    </>
  );
}
