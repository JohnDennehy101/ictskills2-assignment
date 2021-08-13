import React, { useState, useContext } from "react";
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
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";

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
  popper: {
    padding: theme.spacing(2, 4, 3),

    flexDirection: "column",
    backgroundColor: "#EFEFEF",
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
    margin: "20px auto",
    width: "20vw",
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
  const [firstAirDate, setFirstAirDate] = useState("");
  const [open, setOpen] = React.useState(false);
  const [genreFilterAction, setGenreFilterAction] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const popperOpen = Boolean(anchorEl);
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
            className={classes.clearFilterButton}
            variant="contained"
            color="secondary"
            onClick={handleAdvancedFilterClearButtonClick}
          >
            Clear Filter
          </Button>
          <Button
            className={classes.clearFilterButton}
            variant="contained"
            color="tertiary"
            aria-describedby={id}
            onClick={handleClick}
          >
            See Filter Properties
          </Button>
          <Popper id={id} open={popperOpen} anchorEl={anchorEl} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <div className={classes.popper}>
                  <Typography>Release Year: {releaseYearFilter}</Typography>
                  <Typography>
                    Average Rating Greater Than: {releaseYearFilter}
                  </Typography>
                  <Typography>
                    Average Rating Less Than: {releaseYearFilter}
                  </Typography>
                  <Typography>
                    Duration Greater Than: {releaseYearFilter}
                  </Typography>
                  <Typography>
                    Duration Less Than: {releaseYearFilter}
                  </Typography>
                  <Typography>
                    Original Language: {releaseYearFilter}
                  </Typography>
                  <Typography>Sort Category: {releaseYearFilter}</Typography>
                  <Typography>First Air Date: {releaseYearFilter}</Typography>
                  {/* releaseYear: releaseYearFilter,
        averageRatingGreaterThan: averageRatingGreaterThanFilter,
        averageRatingLessThan: averageRatingLessThanFilter,
        durationLessThan: durationLessThanFilter,
        durationGreaterThan: durationGreaterThanFilter,
        originalLanguage: originalLanguage,
        sortCategory: sortCategory,
        firstAirDate: firstAirDate, */}
                </div>
              </Fade>
            )}
          </Popper>
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
      ) : genreFilterAction && displayedContent.length === 0 ? (
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
