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
  modalInputFields: {
    margin: theme.spacing(1),
    width: "90%",
    backgroundColor: "rgb(255, 255, 255)",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function FilterMoviesCard(props) {
  const classes = useStyles();
  let title = props.mediaType === "movie" ? "Filter movies" : "Filter TV Shows";
  const { data, error, isLoading, isError } = useQuery(
    `${props.mediaType}-genres`,
    () => getGenres(props.mediaType)
  );
  const [modalStyle] = React.useState(getModalStyle);

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

  let firstYear = 2020;
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

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h5" component="h1">
        Advanced Filter
      </Typography>
      {props.mediaType === "movie" ? (
        <FormControl className={classes.modalInputFields}>
          <InputLabel id="demo-simple-select-label">Release Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.releaseYearFilter}
            onChange={handleReleaseYearChange}
          >
            {yearOptions.map((year) => {
              return <MenuItem key={year} value={`${year}`}>{year}</MenuItem>;
            })}
          </Select>
        </FormControl>
      ) : (
        <FormControl className={classes.modalInputFields}>
          <InputLabel id="demo-simple-select-label">
            First Air Date Year
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.firstAirDateFilter}
            onChange={handleFirstAirYearChange}
          >
             {yearOptions.map((year) => {
              return <MenuItem key={year} value={`${year}`}>{year}</MenuItem>;
            })}</Select>
        </FormControl>
      )}

      <FormControl className={classes.modalInputFields}>
        {/* <InputLabel id="demo-simple-select-label">1-10</InputLabel> */}

        <TextField
          id="standard-number"
          label="Average Rating Greater Than"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleAverageRatingGreaterThanChange}
          value={props.averageRatingGreaterThanFilter}
        />
      </FormControl>
      {/* <SimpleModal /> */}

      <FormControl className={classes.modalInputFields}>
        {/* <InputLabel id="demo-simple-select-label">1-10</InputLabel> */}

        <TextField
          id="standard-number"
          label="Average Rating Less Than"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleAverageRatingLessThanChange}
          value={props.averageRatingLessThanFilter}
        />
      </FormControl>

      <FormControl className={classes.modalInputFields}>
        {/* <InputLabel id="demo-simple-select-label">1-10</InputLabel> */}

        <TextField
          id="standard-number"
          label="Greater Than Duration"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={durationGreaterThanChange}
          value={props.durationGreaterThanFilter}
        />
      </FormControl>

      <FormControl className={classes.modalInputFields}>
        {/* <InputLabel id="demo-simple-select-label">1-10</InputLabel> */}

        <TextField
          id="standard-number"
          label="Less Than Duration"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={durationLessThanChange}
          value={props.durationLessThanFilter}
        />
      </FormControl>

      <FormControl className={classes.modalInputFields}>
        <InputLabel id="demo-simple-select-label">Original Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.originalLanguage}
          onChange={originalLanguageChange}
        >
          <MenuItem value={"fr"}>French</MenuItem>
          <MenuItem value={"es"}>Spanish</MenuItem>
          <MenuItem value={"de"}>German</MenuItem>
          <MenuItem value={"it"}>Italian</MenuItem>
          <MenuItem value={"ja"}>Japanese</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.modalInputFields}>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.sortCategory}
          onChange={sortCategoryChange}
        >
          <MenuItem value={"popularity.asc"}>Most Popular</MenuItem>
          <MenuItem value={"popularity.desc"}>Least Popular</MenuItem>
          <MenuItem value={"revenue.asc"}>Highest Grossing Revenue</MenuItem>
          <MenuItem value={"revenue.desc"}>Lowest Grossing Revenue</MenuItem>
          <MenuItem value={"vote_count.asc"}>Most Votes</MenuItem>
          <MenuItem value={"vote_count.desc"}>Least Votes</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.modalInputFields}>
        <Button
          variant="contained"
          color="primary"
          onClick={props.advancedSearch}
        >
          Filter
        </Button>
      </FormControl>
    </div>
  );

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
          {props.favouritepage ? <></> :  <Button
            variant="contained"
            color="secondary"
            onClick={props.handleOpen}
          >
            Advanced Filter
          </Button>}
         
          <Modal
            open={props.modalDisplay}
            onClose={props.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
           
            {body}
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
