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
  let title = props.mediaType === 'movie' ? 'Filter movies' : 'Filter TV Shows';
  const { data, error, isLoading, isError } = useQuery(`${props.mediaType}-genres`, () => getGenres(props.mediaType));
  const [modalStyle] = React.useState(getModalStyle);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres.length === 19) {
    genres.unshift({ id: "0", name: "All" });
  }

  console.log(genres);

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
      <FormControl className={classes.modalInputFields}>
        <InputLabel id="demo-simple-select-label">Release Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.releaseYearFilter}
          onChange={handleReleaseYearChange}
        >
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2015}>2015</MenuItem>
          <MenuItem value={2014}>2014</MenuItem>
          <MenuItem value={2013}>2013</MenuItem>
          <MenuItem value={2012}>2012</MenuItem>
          <MenuItem value={2011}>2011</MenuItem>
          <MenuItem value={2010}>2010</MenuItem>
          <MenuItem value={2009}>2009</MenuItem>
          <MenuItem value={2008}>2008</MenuItem>
          <MenuItem value={2007}>2007</MenuItem>
          <MenuItem value={2006}>2006</MenuItem>
          <MenuItem value={2005}>2005</MenuItem>
          <MenuItem value={2004}>2004</MenuItem>
          <MenuItem value={2003}>2003</MenuItem>
          <MenuItem value={2002}>2002</MenuItem>
          <MenuItem value={2001}>2001</MenuItem>
          <MenuItem value={2000}>2000</MenuItem>
          <MenuItem value={1999}>1999</MenuItem>
          <MenuItem value={1998}>1998</MenuItem>
          <MenuItem value={1997}>1997</MenuItem>
          <MenuItem value={1996}>1996</MenuItem>
          <MenuItem value={1995}>1995</MenuItem>
          <MenuItem value={1994}>1994</MenuItem>
          <MenuItem value={1993}>1993</MenuItem>
          <MenuItem value={1992}>1992</MenuItem>
          <MenuItem value={1991}>1991</MenuItem>
          <MenuItem value={1990}>1990</MenuItem>
          <MenuItem value={1989}>1989</MenuItem>
          <MenuItem value={1988}>1988</MenuItem>
          <MenuItem value={1987}>1987</MenuItem>
          <MenuItem value={1986}>1986</MenuItem>
          <MenuItem value={1985}>1985</MenuItem>
          <MenuItem value={1984}>1984</MenuItem>
          <MenuItem value={1983}>1983</MenuItem>
          <MenuItem value={1982}>1982</MenuItem>
          <MenuItem value={1981}>1981</MenuItem>
          <MenuItem value={1980}>1980</MenuItem>
          <MenuItem value={1979}>1979</MenuItem>
          <MenuItem value={1978}>1978</MenuItem>
          <MenuItem value={1977}>1977</MenuItem>
          <MenuItem value={1976}>1976</MenuItem>
          <MenuItem value={1975}>1975</MenuItem>
          <MenuItem value={1974}>1974</MenuItem>
          <MenuItem value={1973}>1973</MenuItem>
          <MenuItem value={1972}>1972</MenuItem>
          <MenuItem value={1971}>1971</MenuItem>
          <MenuItem value={1970}>1970</MenuItem>
          <MenuItem value={1969}>1969</MenuItem>
          <MenuItem value={1968}>1968</MenuItem>
          <MenuItem value={1967}>1967</MenuItem>
          <MenuItem value={1966}>1966</MenuItem>
          <MenuItem value={1965}>1965</MenuItem>
          <MenuItem value={1964}>1964</MenuItem>
          <MenuItem value={1963}>1963</MenuItem>
          <MenuItem value={1962}>1962</MenuItem>
          <MenuItem value={1961}>1961</MenuItem>
          <MenuItem value={1960}>1960</MenuItem>
          <MenuItem value={1959}>1959</MenuItem>
          <MenuItem value={1958}>1958</MenuItem>
          <MenuItem value={1957}>1957</MenuItem>
          <MenuItem value={1956}>1956</MenuItem>
          <MenuItem value={1955}>1955</MenuItem>
          <MenuItem value={1954}>1954</MenuItem>
          <MenuItem value={1953}>1953</MenuItem>
          <MenuItem value={1952}>1952</MenuItem>
          <MenuItem value={1951}>1951</MenuItem>
          <MenuItem value={1950}>1950</MenuItem>
          <MenuItem value={1949}>1949</MenuItem>
          <MenuItem value={1948}>1948</MenuItem>
          <MenuItem value={1947}>1947</MenuItem>
          <MenuItem value={1946}>1946</MenuItem>
          <MenuItem value={1945}>1945</MenuItem>
          <MenuItem value={1944}>1944</MenuItem>
          <MenuItem value={1943}>1943</MenuItem>
          <MenuItem value={1942}>1942</MenuItem>
          <MenuItem value={1941}>1941</MenuItem>
          <MenuItem value={1940}>1940</MenuItem>
          <MenuItem value={1939}>1939</MenuItem>
          <MenuItem value={1938}>1938</MenuItem>
          <MenuItem value={1937}>1937</MenuItem>
          <MenuItem value={1936}>1936</MenuItem>
          <MenuItem value={1935}>1935</MenuItem>
          <MenuItem value={1934}>1934</MenuItem>
          <MenuItem value={1933}>1933</MenuItem>
          <MenuItem value={1932}>1932</MenuItem>
          <MenuItem value={1931}>1931</MenuItem>
          <MenuItem value={1930}>1930</MenuItem>
          <MenuItem value={1929}>1929</MenuItem>
          <MenuItem value={1928}>1928</MenuItem>
          <MenuItem value={1927}>1927</MenuItem>
          <MenuItem value={1926}>1926</MenuItem>
          <MenuItem value={1925}>1925</MenuItem>
          <MenuItem value={1924}>1924</MenuItem>
          <MenuItem value={1923}>1923</MenuItem>
          <MenuItem value={1922}>1922</MenuItem>
          <MenuItem value={1921}>1921</MenuItem>
        </Select>
      </FormControl>
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
        
          <Button
            variant="contained"
            color="secondary"
            onClick={props.handleOpen}
          >
            Advanced Filter
          </Button>
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
