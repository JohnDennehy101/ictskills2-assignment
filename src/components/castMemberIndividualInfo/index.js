import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export default function CastMemberIndividualInfo({ type, personDetail, icon }) {
  let age,
    textDisplay = undefined;
  let currentDate = new Date();

  if (type === "popularity") {
    textDisplay = `Popularity ${personDetail.popularity}`;
  } else if (type === "dateOfBirth") {
    age =
      currentDate.getFullYear() - new Date(personDetail.birthday).getFullYear();
    textDisplay = `${personDetail.birthday} (${age} years old)`;
  } else {
    textDisplay = `${personDetail.place_of_birth}`;
  }

  const useStyles = makeStyles((theme) => ({
    title: {
      textAlign: "center",
      margin: "20px 10px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Paper className={classes.paper}>
        {icon}

        <Typography className={classes.title} variant="h5" gutterBottom>
          {textDisplay}
        </Typography>
      </Paper>
    </Grid>
  );
}
