import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";


export default function CastMemberBiography({ biography }) {
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
      <>
     <Typography className={classes.title} variant="h3" gutterBottom>
                Biography
              </Typography>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography
                    className={classes.title}
                    variant="subtitle1"
                    gutterBottom
                  >
                    {biography}
                  </Typography>
                </Paper>
              </Grid>
              </>
  );
}
