import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
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
        {/* <InputLabel id="demo-simple-select-label">1-10</InputLabel> */}

        <TextField
          id="standard-number"
          label="Average Rating Greater Than"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleAverageRatingGreaterThanChange}
          value={averageRatingGreaterThanFilter}
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
          value={averageRatingLessThanFilter}
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
          value={durationGreaterThanFilter}
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
          value={durationLessThanFilter}
        />
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
