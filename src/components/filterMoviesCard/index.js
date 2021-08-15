import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import img from "../../images/pexels-dziana-hasanbekava-5480827.jpg";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import AdvancedFilterModal from "../advancedFilterModal";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "rgb(204, 204, 0)",
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterMoviesCard(props) {
  const classes = useStyles();
  let title = props.mediaType === "movie" ? "Filter movies" : "Filter TV Shows";
  const { data, error, isLoading, isError } = useQuery(
    `${props.mediaType}-genres`,
    () => getGenres(props.mediaType)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres.length === 19 || genres.length === 16) {
    genres.unshift({ id: "0", name: "All" });
  }

  let firstYear = 2021;
  let lastYear = 1920;
  let yearOptions = [];

  while (firstYear > lastYear) {
    yearOptions.push(firstYear);
    firstYear--;
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    console.log(e.target.value);
    handleChange(e, "genre", e.target.value);
  };

  const handleReleaseYearChange = (e) => {
    handleChange(e, "release_year", e.target.value);
  };

  const handleFirstAirYearChange = (e) => {
    handleChange(e, "first_air_date_year", e.target.value);
  };

  const handleAverageRatingGreaterThanChange = (e) => {
    handleChange(e, "average_rating_greater_than", e.target.value);
  };

  const handleAverageRatingLessThanChange = (e) => {
    handleChange(e, "average_rating_less_than", e.target.value);
  };

  const durationGreaterThanChange = (e) => {
    handleChange(e, "duration_greater_than", e.target.value);
  };

  const durationLessThanChange = (e) => {
    handleChange(e, "duration_less_than", e.target.value);
  };

  const originalLanguageChange = (e) => {
    handleChange(e, "original_language", e.target.value);
  };

  const sortCategoryChange = (e) => {
    handleChange(e, "sort_category", e.target.value);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          {title}
        </Typography>
        <TextField
          className={classes.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={props.titleFilter}
          variant="filled"
          onChange={handleTextChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          {props.favouritepage ? (
            <></>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={props.handleOpen}
            >
              Advanced Filter
            </Button>
          )}

          <Modal
            open={props.modalDisplay}
            onClose={props.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <AdvancedFilterModal
              handleReleaseYearChange={handleReleaseYearChange}
              handleFirstAirYearChange={handleFirstAirYearChange}
              handleAverageRatingGreaterThanChange={
                handleAverageRatingGreaterThanChange
              }
              handleAverageRatingLessThanChange={
                handleAverageRatingLessThanChange
              }
              durationGreaterThanChange={durationGreaterThanChange}
              durationLessThanChange={durationLessThanChange}
              originalLanguageChange={originalLanguageChange}
              sortCategoryChange={sortCategoryChange}
              mediaType={props.mediaType}
              releaseYearFilter={props.releaseYearFilter}
              yearOptions={yearOptions}
              firstAirDateFilter={props.firstAirDateFilter}
              averageRatingGreaterThanFilter={
                props.averageRatingGreaterThanFilter
              }
              averageRatingLessThanFilter={props.averageRatingLessThanFilter}
              durationGreaterThanFilter={props.durationGreaterThanFilter}
              durationLessThanFilter={props.durationLessThanFilter}
              originalLanguage={props.originalLanguage}
              sortCategory={props.sortCategory}
              advancedSearch={props.advancedSearch}
              averageRatingGreaterThanOptions={
                props.averageRatingGreaterThanOptions
              }
              averageRatingLessThanOptions={props.averageRatingLessThanOptions}
              durationLessThanOptions={props.durationLessThanOptions}
              durationGreaterThanOptions={props.durationGreaterThanOptions}
            />
          </Modal>
        </FormControl>
      </CardContent>
      <CardMedia className={classes.media} image={img} title="Filter" />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          {title}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
