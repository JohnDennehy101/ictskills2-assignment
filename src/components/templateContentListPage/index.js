import React, { useState } from "react";
import Header from "../headerContentList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ContentList from "../contentList";
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import Modal from "@material-ui/core/Modal";
import TrendingInputFilter from "../trendingInputFilter";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { populateFilterTableRows, RatingOptions } from "../../util";
import AdvancedFilterPopper from "../advancedFilterPopper";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  pagination: {
    "& > * + *": {
      marginTop: theme.spacing(2),
      justifyContent: "center",
      display: "flex",
    },
    textAlign: "center",
  },
  paginatedList: {
    width: "100%",
    margin: "20px auto",
    textAlign: "center",
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: "1",
  },
  paper: {
    width: "30%",
    height: "10vh",
    margin: "100px auto",
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  snackbar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    textAlign: "center",
    margin: "10px auto",
  },
  clearFilterButton: {
    textAlign: "center",
    display: "flex",
    margin: "10px auto",
    width: "20vw",
    padding: "5px",
    borderRadius: "5px",
  },
  clearFilterButtonMobile: {
    textAlign: "center",
    display: "flex",
    margin: "20px auto",
    width: "80vw",
    padding: "10px",
    borderRadius: "5px",
  },
}));

//If advanced filter (reassign displayed movies)

function TemplateContentPage({
  content,
  title,
  action,
  filteredMoviesSearch,
  handlePageChange,
  page,
  mediaType,
  favouritePage,
  mediaTypeChosen,
  handleClose,
  setDrawerOpen,
  drawerOpen,
  handleModalClose,
  filterPage,
  pageRange,
  userContentReviews,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const filterButtonStyle = isMobile
    ? classes.clearFilterButtonMobile
    : classes.clearFilterButton;

  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [releaseYearFilter, setReleaseYearFilter] = useState(2021);
  const [averageRatingGreaterThanFilter, setAverageRatingGreaterThanFilter] =
    useState("");
  const [averageRatingLessThanFilter, setAverageRatingLessThanFilter] =
    useState("");
  const [durationLessThanFilter, setDurationLessThanFilter] = useState("");
  const [durationGreaterThanFilter, setDurationGreaterThanFilter] =
    useState("");
  const [originalLanguage, setOriginalLanguage] = useState("");
  const [sortCategory, setSortCategory] = useState("");
  const [firstAirDate, setFirstAirDate] = useState("");
  const [open, setOpen] = React.useState(false);
  const [genreFilterAction, setGenreFilterAction] = useState(false);

  const ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const durationOptions = [
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
    100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150,
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tableRows, setTableRows] = useState(undefined);
  const [averageRatingGreaterThanOptions, setAverageRatingGreaterThanOptions] =
    useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [averageRatingLessThanOptions, setAverageRatingLessThanOptions] =
    useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [durationGreaterThanOptions, setDurationGreaterThanOptions] = useState([
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
    100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150,
  ]);
  const [durationLessThanOptions, setDurationLessThanOptions] = useState([
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
    100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150,
  ]);

  let rows = [];

  const handleClick = (event) => {
    rows = populateFilterTableRows(history.location.state);
    setTableRows(rows);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const id = open ? "transitions-popper" : undefined;

  let history = useHistory();

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const body = (
    <div className={classes.paper}>
      <TrendingInputFilter
        labelValue={"Media Type"}
        value={mediaTypeChosen}
        handleChange={handleClose}
        menuItems={["movie", "tv"]}
        helperText={"Select the media type"}
      />
    </div>
  );

  const genreId = Number(genreFilter);
  let displayedContent = [];

  if (content.length > 0 && mediaType === "movie") {
    displayedContent = content
      .filter((m) => {
        return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
      })
      .filter((m) => {
        return genreId > 0 ? m.genre_ids.includes(genreId) : true;
      });
  } else if (content.length > 0 && mediaType === "tv") {
    displayedContent = content
      .filter((m) => {
        return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
      })
      .filter((m) => {
        return genreId > 0 ? m.genre_ids.includes(genreId) : true;
      });
  }

  const handleFilterClose = () => {
    setOpen(false);
  };

  const handleAdvancedFilterClearButtonClick = () => {
    if (mediaType === "movie") {
      window.location.href = `/movies`;
    } else {
      window.location.href = `/tv`;
    }
  };

  let getAdvancedFilterResults = () => {
    filteredMoviesSearch(
      releaseYearFilter,
      averageRatingGreaterThanFilter,
      averageRatingLessThanFilter,
      durationLessThanFilter,
      durationGreaterThanFilter,
      originalLanguage,
      sortCategory,
      firstAirDate
    );
    handleFilterClose();
    history.push({
      pathname: `/${mediaType}/filter`,
      state: {
        releaseYear: releaseYearFilter,
        averageRatingGreaterThan: averageRatingGreaterThanFilter,
        averageRatingLessThan: averageRatingLessThanFilter,
        durationLessThan: durationLessThanFilter,
        durationGreaterThan: durationGreaterThanFilter,
        originalLanguage: originalLanguage,
        sortCategory: sortCategory,
        firstAirDate: firstAirDate,
      },
    });
    console.log(history);
    window.location.href = `/${mediaType}/filter`;
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "release_year") {
      setReleaseYearFilter(value);
    } else if (type === "first_air_date_year") setFirstAirDate(value);
    else if (type === "average_rating_greater_than") {
      setAverageRatingGreaterThanFilter(value);
      setAverageRatingLessThanOptions(
        RatingOptions(value, "greaterThan", ratingOptions)
      );
    } else if (type === "average_rating_less_than") {
      setAverageRatingLessThanFilter(value);
      setAverageRatingGreaterThanOptions(
        RatingOptions(value, "lessThan", ratingOptions)
      );
    } else if (type === "duration_greater_than") {
      setDurationGreaterThanFilter(value);
      setDurationLessThanOptions(
        RatingOptions(value, "greaterThan", durationOptions)
      );
    } else if (type === "duration_less_than") {
      setDurationLessThanFilter(value);
      setDurationGreaterThanOptions(
        RatingOptions(value, "lessThan", durationOptions)
      );
    } else if (type === "original_language") setOriginalLanguage(value);
    else if (type === "sort_category") setSortCategory(value);
    else {
      setGenreFilter(value);
      setGenreFilterAction(true);
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      {filterPage ? (
        <Grid
          display="flex"
          alignContent="center"
          justifyContent="center"
          item
          xs={12}
        >
          <Button
            className={filterButtonStyle}
            variant="contained"
            color="secondary"
            onClick={handleAdvancedFilterClearButtonClick}
          >
            Clear Filter
          </Button>
          <Button
            className={filterButtonStyle}
            variant="contained"
            color="tertiary"
            aria-describedby={id}
            onClick={handleClick}
          >
            See Filter Properties
          </Button>
          <AdvancedFilterPopper
            anchorEl={anchorEl}
            tableRows={tableRows}
            id={id}
          />
        </Grid>
      ) : (
        <></>
      )}
      {displayedContent.length > 0 ? (
        <Grid item container spacing={5}>
          {!filterPage ? (
            <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
              <FilterCard
                onUserInput={handleChange}
                titleFilter={nameFilter}
                genreFilter={genreFilter}
                releaseYearFilter={releaseYearFilter}
                firstAirDateFilter={firstAirDate}
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
                handleClose={handleFilterClose}
                mediaType={mediaType}
                favouritepage={favouritePage}
                averageRatingGreaterThanOptions={
                  averageRatingGreaterThanOptions
                }
                averageRatingLessThanOptions={averageRatingLessThanOptions}
                durationGreaterThanOptions={durationGreaterThanOptions}
                durationLessThanOptions={durationLessThanOptions}
              />
            </Grid>
          ) : (
            <></>
          )}

          {favouritePage ? (
            <>
              <Fab color="secondary" variant="extended" className={classes.fab}>
                <NavigationIcon />
                Type
              </Fab>
              <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                className={classes.fab}
              >
                <NavigationIcon />
                Type
              </Fab>

              <Modal
                style={{ alignItems: "center", justifyContent: "center" }}
                open={drawerOpen}
                onClose={handleModalClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {body}
              </Modal>
            </>
          ) : (
            <></>
          )}

          <ContentList
            action={action}
            content={displayedContent}
            mediaType={mediaType}
            userContentReviews={userContentReviews}
          />
          <Grid item xs={12}>
            <div className={classes.pagination}>
              <Typography>Page: {page}</Typography>
              <Pagination
                count={pageRange}
                page={page}
                className={classes.paginatedList}
                onChange={handlePageChange}
              />
            </div>
          </Grid>
        </Grid>
      ) : genreFilterAction || displayedContent.length === 0 ? (
        <>
          <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
            <FilterCard
              onUserInput={handleChange}
              titleFilter={nameFilter}
              genreFilter={genreFilter}
              releaseYearFilter={releaseYearFilter}
              firstAirDateFilter={firstAirDate}
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
              handleClose={handleFilterClose}
              mediaType={mediaType}
              favouritepage={favouritePage}
              averageRatingGreaterThanOptions={averageRatingGreaterThanOptions}
              averageRatingLessThanOptions={averageRatingLessThanOptions}
              durationGreaterThanOptions={durationGreaterThanOptions}
              durationLessThanOptions={durationLessThanOptions}
            />
          </Grid>
          <Grid
            key="find"
            className={classes.snackbar}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
          >
            <Alert severity="info">No content to display.</Alert>{" "}
          </Grid>
          <Fab color="secondary" variant="extended" className={classes.fab}>
            <NavigationIcon />
            Type
          </Fab>
          <Fab
            color="secondary"
            variant="extended"
            onClick={() => setDrawerOpen(true)}
            className={classes.fab}
          >
            <NavigationIcon />
            Type
          </Fab>

          <Modal
            style={{ alignItems: "center", justifyContent: "center" }}
            open={drawerOpen}
            onClose={handleModalClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </>
      ) : (
        <>
          <Grid
            key="find"
            className={classes.snackbar}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
          >
            <Alert severity="info">No content to display.</Alert>{" "}
          </Grid>
          <Fab color="secondary" variant="extended" className={classes.fab}>
            <NavigationIcon />
            Type
          </Fab>
          <Fab
            color="secondary"
            variant="extended"
            onClick={() => setDrawerOpen(true)}
            className={classes.fab}
          >
            <NavigationIcon />
            Type
          </Fab>

          <Modal
            style={{ alignItems: "center", justifyContent: "center" }}
            open={drawerOpen}
            onClose={handleModalClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </>
      )}
    </Grid>
  );
}
export default TemplateContentPage;
