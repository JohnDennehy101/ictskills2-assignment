import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from "../movieReviews";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: '1'
  },
}));

const ContentDetails = ({ movie, mediaType }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  console.log(movie);
  console.log(mediaType);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        {mediaType === "movie" ? (
          <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        ) : (
          <Chip
            icon={<AccessTimeIcon />}
            label={`${movie.episode_run_time} min.`}
          />
        )}

        {mediaType === "movie" ? (
          <Chip
            icon={<MonetizationIcon />}
            label={`${movie.revenue.toLocaleString()}`}
          />
        ) : (
          <></>
        )}
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
        />
        {mediaType === "movie" ? (
          <Chip label={`Released: ${movie.release_date}`} />
        ) : (
          <Chip label={`Released: ${movie.first_air_date}`} />
        )}
      </Paper>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip
            label="Production Countries"
            className={classes.chip}
            color="primary"
          />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Fab color="secondary" variant="extended" className={classes.fab}>
        <NavigationIcon />
        Reviews
      </Fab>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} mediaType={mediaType} />
      </Drawer>
    </>
  );
};
export default ContentDetails;
