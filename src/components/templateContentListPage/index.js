import React, { useState, useEffect, useRef } from "react";
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
}) {
  console.log(content);
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
      {displayedContent.length > 0 ? (
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
              mediaType={mediaType}
            />
          </Grid>
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
                count={100}
                page={page}
                className={classes.paginatedList}
                onChange={handlePageChange}
              />
            </div>
          </Grid>
        </Grid>
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
            <Alert severity="info">No saved content to display.</Alert>{" "}
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
