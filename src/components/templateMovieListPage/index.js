import React, { useState, useEffect, useRef } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../movieList";
import { filteredMoviesSearch } from "../../api/tmdb-api";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

//If advanced filter (reassign displayed movies)

function MovieListPageTemplate({
  movies,
  title,
  action,
  filteredMoviesSearch,
}) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [releaseYearFilter, setReleaseYearFilter] = useState(2021);
  const [averageRatingGreaterThanFilter, setAverageRatingGreaterThanFilter] =
    useState(8);
  const [averageRatingLessThanFilter, setAverageRatingLessThanFilter] =
    useState("");
  const [durationLessThanFilter, setDurationLessThanFilter] = useState("");
  const [durationGreaterThanFilter, setDurationGreaterThanFilter] =
    useState("");
  const [originalLanguage, setOriginalLanguage] = useState("");
  const [sortCategory, setSortCategory] = useState("");
  const [open, setOpen] = React.useState(false);
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  let getAdvancedFilterResults = () => {
    filteredMoviesSearch(
      releaseYearFilter,
      averageRatingGreaterThanFilter,
      averageRatingLessThanFilter,
      durationLessThanFilter,
      durationGreaterThanFilter,
      originalLanguage,
      sortCategory
    );
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "release_year") setReleaseYearFilter(value);
    else if (type === "average_rating_greater_than")
      setAverageRatingGreaterThanFilter(value);
    else if (type === "average_rating_less_than")
      setAverageRatingLessThanFilter(value);
    else if (type === "duration_greater_than")
      setDurationGreaterThanFilter(value);
    else if (type === "duration_less_than") setDurationLessThanFilter(value);
    else if (type === "original_language") setOriginalLanguage(value);
    else if (type === "sort_category") setSortCategory(value);
    else {
      console.log("setting genre");
      setGenreFilter(value);
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            releaseYearFilter={releaseYearFilter}
            averageRatingGreaterThanFilter={averageRatingGreaterThanFilter}
            averageRatingLessThanFilter={averageRatingLessThanFilter}
            durationGreaterThanFilter={durationGreaterThanFilter}
            durationLessThanFilter={durationLessThanFilter}
            originalLanguage={originalLanguage}
            sortCategory={sortCategory}
            filteredMoviesSearch={filteredMoviesSearch}
            advancedSearch={getAdvancedFilterResults}
            modalDisplay={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
