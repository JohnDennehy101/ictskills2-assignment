import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

export default function AdvancedFilterModal({
  handleReleaseYearChange,
  handleFirstAirYearChange,
  handleAverageRatingGreaterThanChange,
  handleAverageRatingLessThanChange,
  durationGreaterThanChange,
  durationLessThanChange,
  originalLanguageChange,
  sortCategoryChange,
  mediaType,
  releaseYearFilter,
  yearOptions,
  firstAirDateFilter,
  averageRatingGreaterThanFilter,
  averageRatingLessThanFilter,
  durationGreaterThanFilter,
  durationLessThanFilter,
  originalLanguage,
  sortCategory,
  advancedSearch,
  averageRatingGreaterThanOptions,
  averageRatingLessThanOptions,
  durationLessThanOptions,
  durationGreaterThanOptions,
}) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
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
  }));

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const [modalStyle] = React.useState(getModalStyle);

  const classes = useStyles();
  return (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h5" component="h1">
        Advanced Filter
      </Typography>
      {mediaType === "movie" ? (
        <FormControl className={classes.modalInputFields}>
          <InputLabel id="demo-simple-select-label">Release Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={releaseYearFilter}
            onChange={handleReleaseYearChange}
          >
            {yearOptions.map((year) => {
              return (
                <MenuItem key={year} value={`${year}`}>
                  {year}
                </MenuItem>
              );
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
            value={firstAirDateFilter}
            onChange={handleFirstAirYearChange}
          >
            {yearOptions.map((year) => {
              return (
                <MenuItem key={year} value={`${year}`}>
                  {year}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}

      <FormControl className={classes.modalInputFields}>
        <InputLabel id="demo-simple-select-label">
          Average Rating Greater Than
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={averageRatingGreaterThanFilter}
          onChange={handleAverageRatingGreaterThanChange}
        >
          {averageRatingGreaterThanOptions.map((year) => {
            return (
              <MenuItem key={year} value={`${year}`}>
                {year}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl className={classes.modalInputFields}>
        <InputLabel id="demo-simple-select-label">
          Average Rating Less Than
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={averageRatingLessThanFilter}
          onChange={handleAverageRatingLessThanChange}
        >
          {averageRatingLessThanOptions.map((year) => {
            return (
              <MenuItem key={year} value={`${year}`}>
                {year}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl className={classes.modalInputFields}>
        <InputLabel id="demo-simple-select-label">
          Duration Greater Than
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={durationGreaterThanFilter}
          onChange={durationGreaterThanChange}
        >
          {durationGreaterThanOptions.map((duration) => {
            return (
              <MenuItem key={duration} value={`${duration}`}>
                {duration}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl className={classes.modalInputFields}>
        <InputLabel id="demo-simple-select-label">
          Duration Less Than
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={durationLessThanFilter}
          onChange={durationLessThanChange}
        >
          {durationLessThanOptions.map((duration) => {
            return (
              <MenuItem key={duration} value={`${duration}`}>
                {duration}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl className={classes.modalInputFields}>
        <InputLabel id="demo-simple-select-label">Original Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={originalLanguage}
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
          value={sortCategory}
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
        <Button variant="contained" color="primary" onClick={advancedSearch}>
          Filter
        </Button>
      </FormControl>
    </div>
  );
}
