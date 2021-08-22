import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export default function CastMemberAvatar({ personDetail, isMobile }) {
  const useStyles = makeStyles((theme) => ({
    title: {
      textAlign: "center",
      margin: "20px 10px",
    },
    large: {
      width: "12vw",
      height: "20vh",
      margin: "20px auto",
    },
    largeMobile: {
      width: "60vw",
      height: "30vh",
      margin: "20px auto",
    },
  }));

  const classes = useStyles();

  const castImageBubbleStyle = isMobile ? classes.largeMobile : classes.large;

  return (
    <Grid item xs={12} md={12}>
      {isMobile ? (
        <Typography className={classes.title} variant="h5" gutterBottom>
          {personDetail.name}
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h3" gutterBottom>
          {personDetail.name}
        </Typography>
      )}

      <Avatar
        alt={personDetail.name}
        src={`https://image.tmdb.org/t/p/w500${personDetail.profile_path}`}
        className={castImageBubbleStyle}
      />
    </Grid>
  );
}
